// noinspection JSUnusedGlobalSymbols

import Head from 'next/head'
import { createGlobalStyle } from 'styled-components';
import Header from "../components/header/header";

export default function About () {
  const headerHeightRem = 5;

  return (
    <div>
      <Head>
        <title>Martial Arts Explorer</title>

        <meta name="application-name" content="Martial Arts Explorer" />
        <meta name="description" content="Explore Martial Arts techniques! Find your style! Train to perfection!" />

        <link rel="manifest" href="/manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Martial Arts Explorer" />
        <link rel='apple-touch-icon' href="/icons/icon-120x120.png" />
        <link rel='apple-touch-icon' sizes='152x152' href="/icons/icon-152x152.png" />
        <link rel='apple-touch-icon' sizes='180x180' href="/icons/icon-180x180.png" />
        <link rel='apple-touch-icon' sizes='167x167' href="/icons/icon-167x167.png" />

        <meta name="msapplication-config" content="/browserconfig.xml" />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </Head>

      <GlobalStyle/>

      <Header heightRem={headerHeightRem} />
      <p>About Page</p>
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