// noinspection JSUnusedGlobalSymbols

import SkillMap from "../components/skill-map";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Loading from "../components/loading";

export default function Index () {
  const [showSkillMap, setShowSkillMap] = useState(false);

  // Wait until after client-side hydration to show the map, because useWindowSize is only available on the client.
  useEffect(() => {
    setShowSkillMap(true);
  }, []);

  return (
    <>
      <Header title="Skill Map" showBackButton={false} showMoreMenu={true} />
      <div>
        {showSkillMap ? <SkillMap /> : <Loading showHeader={false} />}
      </div>
    </>
  );
}
