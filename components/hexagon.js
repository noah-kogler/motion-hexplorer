import styled, { keyframes } from "styled-components";
import { useState } from "react";

export default function Hexagon ({ size = 200, top = 0, left = 0 }) {
  const [pressed, setPressed] = useState(false);

  const togglePressed = () => { setPressed(!pressed); };

  return (
    <Container size={size} top={top} left={left} pressed={pressed} onMouseDown={togglePressed} onMouseUp={togglePressed}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 280" size={size}>
        <SvgHex points="300,140 225,270 75,270 0,140 75,10 225,10"/>
      </Svg>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: ${props => props.pressed ? props.top + 5 : props.top}px;
  left: ${props => props.pressed ? props.left + 5 : props.left}px;
  width: ${props => props.pressed ? props.size - 10 : props.size}px;
  height: ${props => props.pressed ? props.size - 10 : props.size}px;
  transition: width .25s, height .25s, top .25s, left .25s;
  cursor: pointer;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

const HoverColorAnimation = keyframes`
 0% { fill: grey; }
 100% { fill: black; }
`;

const SvgHex = styled.polygon`
  fill: grey;
  &:hover {
    animation-name: ${HoverColorAnimation};
    animation-duration: .5s;
    fill: black;
  }
`;
