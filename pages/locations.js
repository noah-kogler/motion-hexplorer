// noinspection JSUnusedGlobalSymbols

import Header from "../components/header";
import dynamic from "next/dynamic";

export default function Locations () {
  const LocationMap = dynamic(
    () => import('../components/location-map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  );

  return (
    <>
      <Header title="Location Map" showLocationMap={false} />
      <LocationMap />
    </>
  );
};
