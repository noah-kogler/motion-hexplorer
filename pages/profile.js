// noinspection JSUnusedGlobalSymbols

import Header from "../components/header";
import { makeStyles } from "@material-ui/core/styles";
import useSWR from "swr";
import fetchJson from "../tools/fetcher";
import Image from 'next/image'
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
  row: {
    marginBottom: '2rem',
  },
  label: {
    fontSize: '.8rem',
  },
  value: {
    fontSize: '1.4rem',
  }
});

export default function Profile () {
  const classes = useStyles();

  const { data, error } = useSWR("/api/user", fetchJson);
  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Header title="Profile" showBackButton={true} showEditButton={true} editButtonHref="/profile/edit"/>
      <div className={classes.container}>
        <Box mb={4}>
          <Image src={data.avatarUrl} width={300} height={300} />
        </Box>
        <Box mb={4}>
          <div className={classes.label}>Name</div>
          <div className={classes.value}>{data.name}</div>
        </Box>
        <Box mb={4}>
          <div className={classes.label}>Beschreibung</div>
          <div className={classes.value}>{data.description}</div>
        </Box>
      </div>
    </>
  );
}
