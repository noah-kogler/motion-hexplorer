import styled from "styled-components";

export default function LoadingIndicator({itemName}) {
  return (
    <Container>
      Loading ${itemName}.
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  font-size: x-small;
  padding: .2rem;
`;