import Hexagon from "./hexagon";
import styled from "styled-components";
import { useState } from "react";

export default function HexContainer({width, height, scale, sideLength, halfHeight}) {
  const [moving, setMoving] = useState(false);

  const central = {x: width / 2, y: height / 2 };
  const topLeft = {x: central.x - 3 * sideLength / 2, y: central.y - halfHeight };
  const top = {x: central.x, y: central.y - 2 * halfHeight };
  const topRight = {x: central.x + 3 * sideLength / 2, y: central.y - halfHeight };
  const bottomRight = {x: central.x + 3 * sideLength / 2, y: central.y + halfHeight };
  const bottom = {x: central.x, y: central.y + 2 * halfHeight };
  const bottomLeft = {x: central.x - 3 * sideLength / 2, y: central.y + halfHeight };

  function onTouchStart () {
    setMoving(false); // clear the moving state of the previous touch
  }

  function onTouchMove () {
    setMoving(true);
  }

  return (
    <Container width={width} height={height} onTouchMoveCapture={onTouchMove} onTouchStart={onTouchStart}>
      <Hexagon center={central} sideLength={sideLength} color="#d1625a" hoverColor="#9e4a44" scale={scale} moving={moving} />
      <Hexagon center={topLeft} sideLength={sideLength} color="#dbc51d" hoverColor="#b09e15" scale={scale} moving={moving} />
      <Hexagon center={top} sideLength={sideLength} color="#25b015" hoverColor="#1c8a0f" scale={scale} moving={moving} />
      <Hexagon center={topRight} sideLength={sideLength} color="#16c7c1" hoverColor="#10918d" scale={scale} moving={moving} />
      <Hexagon center={bottomRight} sideLength={sideLength} color="#1330c2" hoverColor="#0d2185" scale={scale} moving={moving} />
      <Hexagon center={bottom} sideLength={sideLength} color="#db14d8" hoverColor="#8f0d8d" scale={scale} moving={moving} />
      <Hexagon center={bottomLeft} sideLength={sideLength} color="#6f13d1" hoverColor="#520c9c" scale={scale} moving={moving} />
    </Container>
  );
}

const Container = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
