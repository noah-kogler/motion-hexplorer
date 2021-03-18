import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components';
import Hexagon from "../components/hexagon";

export default () => (
  <div>
    <Head>
      <title>MotionHexplorer</title>
    </Head>
    <GlobalStyle />

    <Title>My next.js page</Title>

    <Hexagon left={50} top={10}/>
  </div>
);

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
  }
`

const Title = styled.h1`
  font-family: sans-serif;
  text-align: center;
`;

