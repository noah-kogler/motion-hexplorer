// noinspection JSUnusedGlobalSymbols

import SkillMap from "../components/skill-map";
import { useEffect, useState } from "react";
import LoadingIndicator from "../components/loading-indicator";
import Header from "../components/header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  '@global': {
    body: {
      background: "url('/background.png')",
      backgroundSize: 'cover',
    },
  }
});

export default function Index () {
  useStyles();
  const [showSkillMap, setShowSkillMap] = useState(false);

  // Wait until after client-side hydration to show the map, because useWindowSize is only available on the client.
  useEffect(() => {
    setShowSkillMap(true);
  }, []);

  return (
    <>
      <Header title="Skill Map" showSkillMap={false} />
      <div>
        {showSkillMap ? <SkillMap /> : <LoadingIndicator itemName="Skill Map" />}
      </div>
    </>
  );
};
