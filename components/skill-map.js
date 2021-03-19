import Hexagon from "./hexagon";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

export default function SkillMap() {
  const [width, setWidth] = useState(undefined)
  const ref = useRef();

  useEffect(() => {
    setWidth(ref.current.clientWidth);
  });

  const hexSize = 200;
  const center = width / 2;

  return (
    <Container ref={ref}>
      <Hexagon size={200} left={center - hexSize} top={95}/>
      <Hexagon size={200} left={center - 35} top={0}/>
      <Hexagon size={200} left={center - 35} top={190}/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;