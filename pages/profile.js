// noinspection JSUnusedGlobalSymbols

import Header from "../components/header";
import { useState } from "react";
import Edit from "../components/profile/edit";
import Show from "../components/profile/show";
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

export default function Profile () {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  function onEditButtonClick() {
    setEdit(!edit);
  }

  return (
    <>
      <Header title="Profile" showBackButton={!edit} showEditButton={!edit} onEditButtonClick={onEditButtonClick}/>
      <div className={classes.container}>
        {edit ? <Edit /> : <Show />}
      </div>
    </>
  );
};
