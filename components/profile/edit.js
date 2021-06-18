// noinspection JSUnusedGlobalSymbols

import { Button, Grid, TextField } from "@material-ui/core";

export default function Edit () {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            variant="outlined"
            id="description"
            label="Beschreibung"
            fullWidth
            multiline
            rows={5} />
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={1}>
          <Button type="submit" variant="contained" color="primary">Speichern</Button>
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={1}>
          <Button>Abbrechen</Button>
        </Grid>
      </Grid>
    </form>
  );
}
