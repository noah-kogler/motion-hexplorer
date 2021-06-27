// noinspection JSUnusedGlobalSymbols

import Header from "../components/header";
import dynamic from "next/dynamic";
import useSWR from "swr";
import fetchJson from "../tools/fetcher";
import Error from "../components/error";
import Loading from "../components/loading";

export default function Locations () {
  const title = 'Location Map';
  const LocationMap = dynamic(
    () => import('../components/location-map'),
    {
      loading: () => <Loading title={title} showHeader={false} />,
      ssr: false
    }
  );

  const { data: lessons, error } = useSWR('/api/lesson', fetchJson);
  if (error) {
    return <Error title={title} error={error} />;
  }
  if (!lessons) {
    return <Loading title={title} />;
  }

  return (
    <>
      <Header title={title} showLocationMap={false} />
      <LocationMap lessons={lessons} />
    </>
  );
};
