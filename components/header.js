import styled from "styled-components";

export default function Header({heightRem}) {
  return (
    <Container heightRem={heightRem}>
      <Title>Skill Map</Title>
    </Container>
  );
}

const Container = styled.div`
  height: ${props => props.heightRem}rem;
  border-bottom: 2px solid #333333;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 15px #000000;
`;

const Title = styled.h1`
  padding: 1rem;
  margin: 0;
  padding-top: 2rem;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-align: center;
  color: #333333;
`;