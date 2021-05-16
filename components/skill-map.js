import Hexagon from "./hexagon";
import styled from "styled-components";
import { hexHalfHeight } from "../tools/geometry";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import useWindowSize from "../hooks/window-size";
import useDocumentFontSize from "../hooks/document-font-size";

export default function SkillMap({headerHeightRem}) {
  const sideLength = 100;

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

  const central = {x: width / 2, y: height / 2 };
  const topLeft = {x: central.x - 3 * sideLength / 2, y: central.y - halfHeight };
  const top = {x: central.x, y: central.y - 2 * halfHeight };
  const topRight = {x: central.x + 3 * sideLength / 2, y: central.y - halfHeight };
  const bottomRight = {x: central.x + 3 * sideLength / 2, y: central.y + halfHeight };
  const bottom = {x: central.x, y: central.y + 2 * halfHeight };
  const bottomLeft = {x: central.x - 3 * sideLength / 2, y: central.y + halfHeight };

  return (
    <TransformWrapper
      scale={initialScale}
      options={{minScale, limitToBounds: false}}
      wheel={{step: 50}}
      doubleClick={{mode: 'reset'}}>
      {
        ({ scale }) => (
          <>
            <TransformComponent>
              <Container width={width} height={height}>
                <Hexagon center={central} sideLength={sideLength} color="#d1625a" hoverColor="#9e4a44" scale={scale} />
                <Hexagon center={topLeft} sideLength={sideLength} color="#dbc51d" hoverColor="#b09e15" scale={scale}/>
                <Hexagon center={top} sideLength={sideLength} color="#25b015" hoverColor="#1c8a0f" scale={scale}/>
                <Hexagon center={topRight} sideLength={sideLength} color="#16c7c1" hoverColor="#10918d" scale={scale}/>
                <Hexagon center={bottomRight} sideLength={sideLength} color="#1330c2" hoverColor="#0d2185" scale={scale}/>
                <Hexagon center={bottom} sideLength={sideLength} color="#db14d8" hoverColor="#8f0d8d" scale={scale}/>
                <Hexagon center={bottomLeft} sideLength={sideLength} color="#6f13d1" hoverColor="#520c9c" scale={scale}/>
              </Container>
            </TransformComponent>
          </>
        )
      }
    </TransformWrapper>
  );
}

const Container = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
