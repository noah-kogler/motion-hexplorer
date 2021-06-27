// noinspection JSUnusedGlobalSymbols

import Header from "../../components/header";
import { makeStyles } from "@material-ui/core/styles";
import useSWR from "swr";
import fetchJson from "../../tools/fetcher";
import { useRouter } from "next/router";
import { Box } from "@material-ui/core";
import Link from 'next/link';

const useStyles = makeStyles({
  container: {
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.5)',
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
          <div className={classes.label}>Einheit</div>
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
        {
          data.location &&
          <Box mb={4}>
            <div className={classes.label}>Location</div>
            <div className={classes.value}>
              <Link
                href={{
                  pathname: '/locations',
                  query: { markLessonId: data.id },
                }}
              >
                {data.location.name}
              </Link>
            </div>
          </Box>
        }
      </div>
    </>
  );
};
