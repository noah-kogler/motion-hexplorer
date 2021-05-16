import styled from "styled-components";

export default function Credits() {
  // needed for martial-arts.svg
  return (
    <IconDiv>
      Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.
    </IconDiv>
  );
}

const IconDiv = styled.div`
  position: absolute;
  bottom: 0;
  font-size: x-small;
  padding: .2rem;
`;