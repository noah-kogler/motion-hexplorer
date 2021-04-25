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
  const central = {x: width / 2, y: 300 };
  return (
    <Container ref={ref}>
      <Hexagon center={central} sideLength={sideLength} padding={padding}/>
      <Hexagon center={{x: central.x - 3 * sideLength / 2, y: central.y - hexHalfHeight(sideLength) }} sideLength={sideLength}  padding={padding}/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;