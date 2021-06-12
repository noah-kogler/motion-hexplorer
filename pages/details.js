// noinspection JSUnusedGlobalSymbols

import Header from "../components/header/header";
import styled, { createGlobalStyle } from "styled-components";

export default function Details () {
  return (
    <>
      <GlobalStyle />
      <Header title="Details" />
      <Container>
        <p>Details Page</p>
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
