import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    bottom: '0',
    fontSize: 'x-small',
    padding: '.2rem',
  },
});

export default function LoadingIndicator({itemName}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      Loading ${itemName}.
    </div>
  );
}
