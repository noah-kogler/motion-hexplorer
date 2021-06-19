// noinspection JSUnusedGlobalSymbols

import Header from "../../components/header";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import Image from "next/image";
import useSWR from "swr";
import fetchJson from "../../tools/fetcher";
import { useFormState } from "react-hooks-use-form-state";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  '@global': {
    body: {
      background: '#7D8E99',
    }
  },
  container: {
    margin: '2rem',
    maxWidth: '40rem',
  },
});

export default function Edit () {
  const classes = useStyles();
  const router = useRouter();

  const { data, error } = useSWR("/api/user", fetchJson);

  const [name, setName] = useFormState(data?.name ?? '');
  const [description, setDescription] = useFormState(data?.description ?? '');
  const [pushNotifications, setPushNotifications] = useFormState(data?.pushNotifications ?? false);

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log("TODO: POST /api/user", { name, description, pushNotifications });
    router.push("/profile");
  }

  return (
    <>
      <Header title="Profil bearbeiten" showBackButton={false} />
      <div className={classes.container}>
        <form>
          <Box mb={4}>
            <Image src={data.avatarUrl} width={300} height={300} />
          </Box>
          <Box mb={4}>
            <TextField
              name="name"
              variant="outlined"
              value={name}
              onChange={(event) => { setName(event.target.value); }}
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus />
          </Box>
          <Box mb={4}>
            <TextField
              name="description"
              variant="outlined"
              value={description}
              onChange={(event) => { setDescription(event.target.value); }}
              id="description"
              label="Beschreibung"
              fullWidth
              multiline
              rows={5} />
          </Box>
          <Box mb={4}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={pushNotifications}
                  name="pushNotifications"
                  onChange={(event) => { setPushNotifications(event.target.value); }} />
              }
              label="Benachrichtigungen für Trainingseinheiten aktivieren"
            />
          </Box>
          <Box mb={4} display="flex">
            <Box>
              <Button type="submit" variant="contained" color="primary" onClick={onSubmit}>Speichern</Button>
            </Box>
            <Box ml={4}>
              <Button href="/profile">Abbrechen</Button>
            </Box>
          </Box>
        </form>
      </div>
    </>
  );
};
