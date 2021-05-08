import { useState } from "react";
import Hexagon from "./hexagon";
import styled from "styled-components";
import { hexHalfHeight } from "../tools/geometry";
import Hammer from 'react-hammerjs';
import useWindowSize from "../hooks/window-size";

export default function SkillMap() {
  const [sideLength, setSideLength] = useState(100);
  const [testText, setTestText] = useState("HELLO");
  const {width} = useWindowSize();

  function onWheel(event) {
    event.preventDefault();
    setTestText("onWheel - event.deltaY * -0.05:" + (event.deltaY * -0.05));
    setSideLength(Math.min(Math.max(40, sideLength + event.deltaY * -0.05), 400));
  }

  function onPinch(event) {
    event.preventDefault();
    setTestText("onPinch - event.scale:" + event.scale);
    setSideLength(Math.min(Math.max(40, sideLength * event.scale), 400));
  }

  const padding = sideLength / 10;
  const halfHeight = hexHalfHeight(sideLength);
  const central = {x: width / 2, y: 3 * sideLength };
  const topLeft = {x: central.x - 3 * sideLength / 2, y: central.y - halfHeight };
  const top = {x: central.x, y: central.y - 2 * halfHeight };
  const topRight = {x: central.x + 3 * sideLength / 2, y: central.y - halfHeight };
  const bottomRight = {x: central.x + 3 * sideLength / 2, y: central.y + halfHeight };
  const bottom = {x: central.x, y: central.y + 2 * halfHeight };
  const bottomLeft = {x: central.x - 3 * sideLength / 2, y: central.y + halfHeight };

  return (
    <Container onWheel={onWheel} width={width}>
      <Hammer onPinch={onPinch} options={{recognizers: {pinch: { enable: true }}}}>
        <div>
          <Hexagon center={central} sideLength={sideLength} padding={padding} color="#d1625a" hoverColor="#9e4a44" />
          <Hexagon center={topLeft} sideLength={sideLength}  padding={padding} color="#dbc51d" hoverColor="#b09e15"/>
          <Hexagon center={top} sideLength={sideLength}  padding={padding} color="#25b015" hoverColor="#1c8a0f"/>
          <Hexagon center={topRight} sideLength={sideLength}  padding={padding} color="#16c7c1" hoverColor="#10918d"/>
          <Hexagon center={bottomRight} sideLength={sideLength}  padding={padding} color="#1330c2" hoverColor="#0d2185"/>
          <Hexagon center={bottom} sideLength={sideLength}  padding={padding} color="#db14d8" hoverColor="#8f0d8d"/>
          <Hexagon center={bottomLeft} sideLength={sideLength}  padding={padding} color="#6f13d1" hoverColor="#520c9c"/>
        </div>
      </Hammer>
      <pre>{testText}</pre>
    </Container>
  );
}

const Container = styled.div`
  border: 2px solid red;
  position: relative;
  overflow: visible;
  width: ${props => props.width}px;
`;