import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.5)',
  },
  limitedWith: {
    margin: 'auto',
    maxWidth: '40rem',
  },
});

export default function Content({children}) {
  const classes = useStyles();
  return <div className={classes.container}>
    <div className={classes.limitedWith}>
      {children}
    </div>
  </div>
}