// noinspection JSUnusedGlobalSymbols

import Header from "../components/header";
import dynamic from "next/dynamic";
import useSWR from "swr";
import fetchJson from "../tools/fetcher";

export default function Locations () {
  const LocationMap = dynamic(
    () => import('../components/location-map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  );

  const { data: lessons, error } = useSWR('/api/lesson', fetchJson);
  if (error) {
    return <div>Failed to load. Error: {error.message}</div>;
  }
  if (!lessons) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Header title="Location Map" showLocationMap={false} />
      <LocationMap lessons={lessons} />
    </>
  );
};
