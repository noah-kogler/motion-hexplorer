import Hexagon from "./hexagon";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { hexHalfHeight } from "../tools/geometry";

export default function SkillMap() {
  const [width, setWidth] = useState(undefined)
  const ref = useRef();

  useEffect(() => {
    setWidth(ref.current.clientWidth);
  });

  const padding = 10;
  const sideLength = 100;
  const halfHeight = hexHalfHeight(sideLength);

  const central = {x: width / 2, y: 300 };
  const topLeft = {x: central.x - 3 * sideLength / 2, y: central.y - halfHeight };
  const top = {x: central.x, y: central.y - 2 * halfHeight };
  const topRight = {x: central.x + 3 * sideLength / 2, y: central.y - halfHeight };
  const bottomRight = {x: central.x + 3 * sideLength / 2, y: central.y + halfHeight };
  const bottom = {x: central.x, y: central.y + 2 * halfHeight };
  const bottomLeft = {x: central.x - 3 * sideLength / 2, y: central.y + halfHeight };

  return (
    <Container ref={ref}>
      <Hexagon center={central} sideLength={sideLength} padding={padding} color="#d1625a" hoverColor="#9e4a44" />
      <Hexagon center={topLeft} sideLength={sideLength}  padding={padding} color="#dbc51d" hoverColor="#b09e15"/>
      <Hexagon center={top} sideLength={sideLength}  padding={padding} color="#25b015" hoverColor="#1c8a0f"/>
      <Hexagon center={topRight} sideLength={sideLength}  padding={padding} color="#16c7c1" hoverColor="#10918d"/>
      <Hexagon center={bottomRight} sideLength={sideLength}  padding={padding} color="#1330c2" hoverColor="#0d2185"/>
      <Hexagon center={bottom} sideLength={sideLength}  padding={padding} color="#db14d8" hoverColor="#8f0d8d"/>
      <Hexagon center={bottomLeft} sideLength={sideLength}  padding={padding} color="#6f13d1" hoverColor="#520c9c"/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;