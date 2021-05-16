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
  border-bottom: 2px solid black;
  box-sizing: border-box;
`;

const Title = styled.h1`
  padding: 1rem;
  margin: 0;
  font-family: sans-serif;
  text-align: center;
`;