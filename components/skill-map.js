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

  const padding = 20;
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
      <Hexagon center={central} sideLength={sideLength} padding={padding}/>
      <Hexagon center={topLeft} sideLength={sideLength}  padding={padding}/>
      <Hexagon center={top} sideLength={sideLength}  padding={padding}/>
      <Hexagon center={topRight} sideLength={sideLength}  padding={padding}/>
      <Hexagon center={bottomRight} sideLength={sideLength}  padding={padding}/>
      <Hexagon center={bottom} sideLength={sideLength}  padding={padding}/>
      <Hexagon center={bottomLeft} sideLength={sideLength}  padding={padding}/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;