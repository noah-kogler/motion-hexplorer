// noinspection JSUnusedGlobalSymbols

import Header from "../../components/header";
import { makeStyles } from "@material-ui/core/styles";
import useSWR from "swr";
import fetchJson from "../../tools/fetcher";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  '@global': {
    body: {
      background: '#7D8E99',
    }
  },
  container: {
    margin: '2rem',
  },
});

export default function Lesson () {
  const classes = useStyles();
  const { query } = useRouter();
  const { data, error } = useSWR(() => query.id && `/api/lesson/${query.id}`, fetchJson);

  if (error) {
    return <div>Failed to load. Error: {error.message}</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Header title={data.title} showBackButton={true} />
      <div className={classes.container}>
        <p>Lesson Page</p>
      </div>
    </>
  );
};
