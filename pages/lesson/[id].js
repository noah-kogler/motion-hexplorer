// noinspection JSUnusedGlobalSymbols

import Header from "../../components/header";
import { makeStyles } from "@material-ui/core/styles";
import useSWR from "swr";
import fetchJson from "../../tools/fetcher";
import { useRouter } from "next/router";
import { Box } from "@material-ui/core";
import Link from 'next/link';
import { adjustColor, colorForStatus } from "../../tools/color";
import Content from "../../components/content";

const useStyles = makeStyles({
  pre: {
    whiteSpace: 'pre',
  },
  category: {
    fontWeight: 'bold',
  },
  status: {
    background: props => props.statusColor,
    border: props => '4px solid ' + adjustColor(props.statusColor, -30),
    color: props => adjustColor(props.statusColor, -60),
    borderRadius: '1rem',
    fontWeight: 'bold',
    padding: '.3rem .6rem',
  },
  fullWidthContainer: {
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
    height: '0',
  },
  fullWidth: {
    left: '0',
    top: '0',
    height: '100%',
    width: '100%',
    position: 'absolute',
  }
});

const statusDescription = {
  todo: 'offen',
  'in-progress': 'in Arbeit',
  done: 'abgeschlossen',
};

export default function Lesson () {
  const { query } = useRouter();
  const { data, error } = useSWR(() => query.id && `/api/lesson/${query.id}`, fetchJson);
  const classes = useStyles({statusColor: data ? colorForStatus(data.status) : '#7D8E99' });

  if (error) {
    return <div>Failed to load. Error: {error.message}</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Header title={data.title} showBackButton={true} />
      <Content>
        <Box mb={4}>
          <Box display="flex" justifyContent="space-between" alignItems="baseline">
            <Box className={classes.category}>{data.category}</Box>
            <Box className={classes.status}>{statusDescription[data.status]}</Box>
          </Box>
        </Box>
        <h2>Instruktionen</h2>
        <Box mb={4} className={classes.fullWidthContainer}>
          <iframe
            className={classes.fullWidth}
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
            <div className={classes.pre}>{data.tips}</div>
          </Box>
        }
        {
          data.location &&
          <>
            <h2>Location</h2>
            <Box mb={4}>
              <div>
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
          </>
        }
      </Content>
    </>
  );
};
