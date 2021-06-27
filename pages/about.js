// noinspection JSUnusedGlobalSymbols

import Header from "../components/header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.5)',
  },
});

export default function About () {
  const classes = useStyles();
  return (
    <>
      <Header title="Über diese App" showAbout={false} />
      <div className={classes.container}>
        <h2>Idee und Inhalte</h2>
        <ul>
          <li>Matthias Fagerer</li>
          <li>Jakob Moser</li>
        </ul>
        <h2>Design und technische Umsetzung</h2>
        <ul>
          <li>Noah Kogler</li>
        </ul>
        <h2>Bilder</h2>
        <ul>
          <li>Hintergrund: <a href="https://unsplash.com/@jeremiecs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jérémie Crausaz</a> über <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
        </ul>
      </div>
    </>
  );
};
