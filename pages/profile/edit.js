// noinspection JSUnusedGlobalSymbols

import Header from "../../components/header";
import { Box, Button, Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import Image from "next/image";
import useSWR from "swr";
import fetchJson from "../../tools/fetcher";
import { useFormState } from "react-hooks-use-form-state";
import { useRouter } from "next/router";
import Content from "../../components/content";
import Error from "../../components/error";
import Loading from "../../components/loading";

export default function Edit () {
  const router = useRouter();
  const title = "Profil bearbeiten";

  const { data, error } = useSWR("/api/user", fetchJson);

  const [name, setName] = useFormState(data?.name ?? '');
  const [description, setDescription] = useFormState(data?.description ?? '');
  const [pushNotifications, setPushNotifications] = useFormState(data?.pushNotifications ?? false);

  if (error) {
    return <Error title={title} error={error}/>;
  }
  if (!data) {
    return <Loading title={title} />;
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log("TODO: POST /api/user", { name, description, pushNotifications });
    router.push("/profile");
  }

  return (
    <>
      <Header title={title} />
      <Content>
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
      </Content>
    </>
  );
};
