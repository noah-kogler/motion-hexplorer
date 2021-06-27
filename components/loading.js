// noinspection JSUnusedGlobalSymbols

import Header from "./header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loadingText: {
    color: 'rgba(255, 255, 255, 0.75)',
  },
});

export default function Loading({title, showHeader = true}) {
  const classes = useStyles();

  return (
    <>
      {showHeader && <Header title={title} showBackButton={true} />}
      <div className={classes.loadingText}>
        lädt...
      </div>
    </>
  );
}
