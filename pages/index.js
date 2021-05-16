import Head from 'next/head'
import { createGlobalStyle } from 'styled-components';
import SkillMap from "../components/skill-map";
import Credits from "../components/credits";
import { useEffect, useState } from "react";
import LoadingIndicator from "../components/loading-indicator";
import Header from "../components/header";

export default function Index () {
  const [showSkillMap, setShowSkillMap] = useState(false);
  const headerHeightRem = 5;

  // Wait until after client-side hydration to show the map, because useWindowSize is only available on the client.
  useEffect(() => {
    setShowSkillMap(true);
  }, []);

  return (
    <div>
      <Head>
        <title>MotionHexplorer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </Head>

      <GlobalStyle/>

      <Header heightRem={headerHeightRem} />
      {showSkillMap ? <SkillMap headerHeightRem={headerHeightRem} /> : <LoadingIndicator itemName="Skill Map" />}
      <Credits />
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

