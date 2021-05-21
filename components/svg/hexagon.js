import { hexHalfHeight } from "../../tools/geometry";
import styled from "styled-components";

export default function HexagonSvg({center, containerSideLength, color, scale}) {
  const padding = containerSideLength / 10;
  const sideLength = containerSideLength - padding;
  const halfHeight = hexHalfHeight(sideLength);
  const halfSide = sideLength / 2;
  const width = 2 * containerSideLength;
  const points = [
    { x: center.x - halfSide, y: center.y - halfHeight }, // topLeft
    { x: center.x + halfSide, y: center.y - halfHeight }, // topRight
    { x: center.x + sideLength, y: center.y }, // centerRight
    { x: center.x + halfSide, y: center.y + halfHeight }, // bottomRight
    { x: center.x - halfSide, y: center.y + halfHeight }, // bottomLeft
    { x: center.x - sideLength, y: center.y }, // centerLeft
  ];

  let headerY, imageY, showDetails, largeFontSize, smallFontSize;
  if (scale >= 2) {
    headerY = '15%';
    imageY = '50%';
    showDetails = true;
    largeFontSize = 'small';
    smallFontSize = 'x-small';
  } else {
    headerY = '25%';
    imageY = '40%';
    showDetails = false;
    largeFontSize = 'medium';
    smallFontSize = 'xx-small';
  }

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 " + width + " " + (2 * hexHalfHeight(containerSideLength))}>
      <Polygon
        points={points.map(({x, y}) => x + ',' + y).join(' ')}
        strokeColor={color} />
      <text x="50%" y={headerY} dominantBaseline="middle" textAnchor="middle" fontSize={largeFontSize}>Hello</text>
      {showDetails && <text x="50%" y="35%" dominantBaseline="middle" textAnchor="middle" fontSize={smallFontSize}>Details</text>}
      <image x="35%" y={imageY} width="30%" xlinkHref="/martial-arts.svg" />
    </Svg>
  );
}

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

const Polygon = styled.polygon`
  stroke: ${props => props.strokeColor};
  transition: stroke .25s;
  stroke-width: 6;
  fill: white;
`;
