import { hexHalfHeight } from "../../tools/geometry";
import styled, { keyframes } from "styled-components";

export default function HexagonSvg({center, padding, containerSideLength}) {
  const sideLength = containerSideLength - padding;
  const halfHeight = hexHalfHeight(sideLength);
  const halfSide = sideLength / 2;
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
      viewBox={"0 0 " + (2 * containerSideLength) + " " + (2 * hexHalfHeight(containerSideLength))}>
      <Polygon points={points.map(({x, y}) => x + ',' + y).join(' ')}/>
    </Svg>
  );
}

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

const HoverColorAnimation = keyframes`
 0% { fill: grey; }
 100% { fill: black; }
`;

const Polygon = styled.polygon`
  fill: grey;
  &:hover {
    animation-name: ${HoverColorAnimation};
    animation-duration: .5s;
    fill: black;
  }
`;
