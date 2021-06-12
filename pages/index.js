// noinspection JSUnusedGlobalSymbols

import SkillMap from "../components/skill-map";
import Credits from "../components/credits";
import { useEffect, useState } from "react";
import LoadingIndicator from "../components/loading-indicator";
import Header from "../components/header/header";

export default function Index () {
  const [showSkillMap, setShowSkillMap] = useState(false);

  // Wait until after client-side hydration to show the map, because useWindowSize is only available on the client.
  useEffect(() => {
    setShowSkillMap(true);
  }, []);

  return (
    <div>
      <Header title="Skill Map" showSkillMap={false} />
      {showSkillMap ? <SkillMap /> : <LoadingIndicator itemName="Skill Map" />}
      <Credits />
    </div>
  );
};
