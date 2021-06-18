// noinspection JSUnusedGlobalSymbols

import { ThemeProvider } from '@material-ui/core/styles';
import Head from "next/head";
import { defaultTheme } from "../theme.config";
import { CssBaseline } from "@material-ui/core";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
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

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
