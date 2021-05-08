import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components';
import SkillMap from "../components/skill-map";
import Credits from "../components/credits";

export default () => (
  <div>
    <Head>
      <title>MotionHexplorer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    </Head>
    <GlobalStyle />

    <Title>Skill Map</Title>

    <SkillMap />

    <Credits />
  </div>
);

const GlobalStyle = createGlobalStyle`
  html, body{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Title = styled.h1`
  font-family: sans-serif;
  text-align: center;
`;

