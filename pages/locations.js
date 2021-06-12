// noinspection JSUnusedGlobalSymbols

import Header from "../components/header/header";
import { createGlobalStyle } from "styled-components";
import dynamic from "next/dynamic";

export default function Locations () {
  const Map = dynamic(
    () => import('../components/map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  );

  return (
    <>
      <GlobalStyle />
      <Header title="Location Map" showLocationMap={false} />
      <Map />
    </>
  );
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: #7D8E99;
  }
`;
