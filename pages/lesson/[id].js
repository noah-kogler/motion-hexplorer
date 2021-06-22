// noinspection JSUnusedGlobalSymbols

import Header from "../../components/header";
import { makeStyles } from "@material-ui/core/styles";
import useSWR from "swr";
import fetchJson from "../../tools/fetcher";
import { useRouter } from "next/router";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  '@global': {
    body: {
      background: '#7D8E99',
    }
  },
  container: {
    margin: '2rem',
  },
  label: {
    fontSize: '.8rem',
  },
  value: {
    fontSize: '1.4rem',
  },
  pre: {
    whiteSpace: 'pre',
  }
});

const statusDescription = {
  todo: 'noch nicht begonnen',
  'in-progress': 'in Arbeit',
  done: 'erledigt',
};

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
        <Box mb={4}>
          <div className={classes.label}>Kategorie</div>
          <div className={classes.value}>{data.category}</div>
        </Box>
        <Box mb={4}>
          <div className={classes.label}>Status</div>
          <div className={classes.value}>{statusDescription[data.status]}</div>
        </Box>
        <Box mb={4}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${data.videoId}`}
            title={data.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </Box>
        {
          data.tips &&
          <Box mb={4}>
            <div className={classes.label}>Tipps</div>
            <div className={[classes.value, classes.pre].join(' ')}>{data.tips}</div>
          </Box>
        }
      </div>
    </>
  );
};
