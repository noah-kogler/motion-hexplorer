// noinspection JSUnusedGlobalSymbols

import Header from "../components/header/header";
import styled, { createGlobalStyle } from "styled-components";

export default function About () {
  return (
    <>
      <GlobalStyle />
      <Header title="Über diese App" showAbout={false} />
      <Container>
        <h2>Idee und Inhalte</h2>
        <ul>
          <li>Matthias Fagerer</li>
          <li>Jakob Moser</li>
        </ul>
        <h2>Design und technische Umsetzung</h2>
        <ul>
          <li>Noah Kogler</li>
        </ul>
        <h2>Bilder</h2>
        <ul>
          <li>Hintergrund: <a href="https://unsplash.com/@jeremiecs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jérémie Crausaz</a> über <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
        </ul>
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
