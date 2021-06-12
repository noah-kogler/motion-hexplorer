import { hexHalfHeight } from "../tools/geometry";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import useWindowSize from "../hooks/window-size";
import useDocumentFontSize from "../hooks/document-font-size";
import HexContainer from "./hex-container";
import { withTheme } from "styled-components";

function SkillMap({theme}) {
  const sideLength = 100;

  const matches = theme.headerHeight.match(/(\d+)\s*rem/);
  if (!matches) {
    throw new Error(`Unsupported value for headerHeight in theme config: ${theme.headerHeight}`);
  }
  const headerHeightRem = parseInt(matches[1], 10);

  const windowSize = useWindowSize();
  const documentFontSize = useDocumentFontSize();

  const width = windowSize.width;
  const height = windowSize.height - (headerHeightRem * documentFontSize);

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
