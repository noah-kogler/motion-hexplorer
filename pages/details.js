// noinspection JSUnusedGlobalSymbols

import Header from "../components/header";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Details () {
  const classes = useStyles();
  return (
    <>
      <Header title="Details" showBackButton={true} />
      <div className={classes.container}>
        <p>Details Page</p>
      </div>
    </>
  );
};
