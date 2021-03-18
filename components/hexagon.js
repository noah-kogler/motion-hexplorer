import styled from "styled-components";

export default function Hexagon ({ size = 20 }) {
  return (
    <Container size={size}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 280" size={size}>
        <SvgHex points="300,150 225,280 75,280 0,150 75,20 225,20"/>
      </Svg>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem auto;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
`;

const Svg = styled.svg`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
`;

const SvgHex = styled.polygon`
  fill: grey;
  &:hover {
    fill: black;
  }
`;
