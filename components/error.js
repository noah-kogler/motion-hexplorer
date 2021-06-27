// noinspection JSUnusedGlobalSymbols

import Header from "./header";
import Content from "./content";
import { Box } from "@material-ui/core";

export default function Error({title, error, showHeader = true}) {

  return (
    <>
      {showHeader && <Header title={title} showBackButton={true} />}
      <Content>
        <Box mb={4}>
          Daten konnten nicht geladen werden. Bitte überprüfen Sie ihre Internetverbindung!
        </Box>
        <h2>Fehler</h2>
        <Box mb={4}>{error.message}</Box>
      </Content>
    </>
  );
}
