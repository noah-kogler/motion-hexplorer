import { hexHalfHeight } from "../../tools/geometry";
import styled, { keyframes } from "styled-components";

export default function HexagonSvg({center, padding, containerSideLength, color, hoverColor}) {
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

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 " + width + " " + (2 * hexHalfHeight(containerSideLength))}>
      <Polygon
        points={points.map(({x, y}) => x + ',' + y).join(' ')}
        strokeColor={color}
        strokeHoverColor={hoverColor}/>
      <text x="50%" y="25%" dominantBaseline="middle" textAnchor="middle">Hello</text>
      <image x="35%" y="40%" width="30%" xlinkHref="/martial-arts.svg" />
    </Svg>
  );
}

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

const animateHoverColor = (strokeColor, strokeHoverColor) => keyframes`
 0% { stroke: ${strokeColor}; }
 100% { stroke: ${strokeHoverColor}; }
`;

const Polygon = styled.polygon`
  stroke: ${props => props.strokeColor};
  stroke-width: 6;
  fill: white;
  &:hover {
    animation-name: ${props => animateHoverColor(props.strokeColor, props.strokeHoverColor)};
    animation-duration: .5s;
    stroke: ${props => props.strokeHoverColor};
  }
`;
