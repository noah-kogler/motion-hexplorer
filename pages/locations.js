// noinspection JSUnusedGlobalSymbols

import Header from "../components/header/header";
import styled, { createGlobalStyle } from "styled-components";

export default function Locations () {
  return (
    <>
      <GlobalStyle />
      <Header title="Location Map" showLocationMap={false} />
      <Container>
        <p>Locations Page</p>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 2rem;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background: #7D8E99;
  }
`;
