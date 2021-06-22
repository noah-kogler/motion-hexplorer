import { hexHalfHeight } from "../tools/geometry";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import HexContainer from "./hex-container";
import { withTheme } from "@material-ui/core";
import useContentAreaSize from "../hooks/content-area-size";

function SkillMap({theme}) {
  const {width, height} = useContentAreaSize(theme);
  if (width === 0 && height === 0) {
    return <div>loading...</div>
  }

  const sideLength = 100;

  const halfHeight = hexHalfHeight(sideLength);

  const neededWidth = 2 * (3 * sideLength / 2 + sideLength); // formula for 3 elements next to each other
  const neededHeight = 6 * halfHeight; // formula for 3 elements on top of each other

  const minScale = 0.5;
  const initialScale = neededWidth > width || neededHeight > height
    ? Math.max(Math.min(width / neededWidth, height / neededHeight), minScale)
    : 1;

  return (
    <TransformWrapper
      scale={initialScale}
      options={{minScale, limitToBounds: false}}
      wheel={{step: 50}}
      doubleClick={{mode: 'reset'}}>
      {
        ({ scale }) => (
          <TransformComponent>
            <HexContainer scale={scale} width={width} height={height} sideLength={sideLength} halfHeight={halfHeight} />
          </TransformComponent>
        )
      }
    </TransformWrapper>
  );
}

export default withTheme(SkillMap);
