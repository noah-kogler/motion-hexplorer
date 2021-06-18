// noinspection JSUnusedGlobalSymbols
import useSWR from "swr";
import fetchJson from "../../tools/fetcher";

export default function Show () {
  const { data, error } = useSWR("/api/user", fetchJson)

  if (error) {
    return <div>failed to load</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  return <div>hello {data.name}!</div>
}
