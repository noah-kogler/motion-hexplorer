import styled, { keyframes } from "styled-components";

export default function Hexagon ({ size = 200, top = 0, left = 0 }) {
  return (
    <Container size={size} top={top} left={left}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 280" size={size}>
        <SvgHex points="300,140 225,270 75,270 0,140 75,10 225,10"/>
      </Svg>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
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

