import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components';
import SkillMap from "../components/skill-map";

export default () => (
  <div>
    <Head>
      <title>MotionHexplorer</title>
    </Head>
    <GlobalStyle />

    <Title>Skill Map</Title>

    <SkillMap />
  </div>
);

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: sans-serif;
  text-align: center;
`;

