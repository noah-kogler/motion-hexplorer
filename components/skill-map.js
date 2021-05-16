import { useLayoutEffect, useState } from "react";
import Hexagon from "./hexagon";
import styled from "styled-components";
import { hexHalfHeight } from "../tools/geometry";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import useWindowSize from "../hooks/window-size";

export default function SkillMap({headerHeightRem}) {
  const [sideLength, setSideLength] = useState(100);
  const [toPxFactor, setToPxFactor] = useState(0);

  useLayoutEffect(() => {
    setToPxFactor(parseFloat(getComputedStyle(document.documentElement).fontSize));
  }, []);

  const windowSize = useWindowSize();
  const width = windowSize.width;
  const height = windowSize.height - (headerHeightRem * toPxFactor);

  const padding = sideLength / 10;
  const halfHeight = hexHalfHeight(sideLength);
  const central = {x: width / 2, y: height / 2 };
  const topLeft = {x: central.x - 3 * sideLength / 2, y: central.y - halfHeight };
  const top = {x: central.x, y: central.y - 2 * halfHeight };
  const topRight = {x: central.x + 3 * sideLength / 2, y: central.y - halfHeight };
  const bottomRight = {x: central.x + 3 * sideLength / 2, y: central.y + halfHeight };
  const bottom = {x: central.x, y: central.y + 2 * halfHeight };
  const bottomLeft = {x: central.x - 3 * sideLength / 2, y: central.y + halfHeight };

  return (
    <TransformWrapper defaultScale={1} wheel={{step: 50}}>
      {
        ({ scale }) => (
          <>
            <TransformComponent>
              <Container width={width} height={height}>
                <Hexagon center={central} sideLength={sideLength} padding={padding} color="#d1625a" hoverColor="#9e4a44" scale={scale} />
                <Hexagon center={topLeft} sideLength={sideLength}  padding={padding} color="#dbc51d" hoverColor="#b09e15" scale={scale}/>
                <Hexagon center={top} sideLength={sideLength}  padding={padding} color="#25b015" hoverColor="#1c8a0f" scale={scale}/>
                <Hexagon center={topRight} sideLength={sideLength}  padding={padding} color="#16c7c1" hoverColor="#10918d" scale={scale}/>
                <Hexagon center={bottomRight} sideLength={sideLength}  padding={padding} color="#1330c2" hoverColor="#0d2185" scale={scale}/>
                <Hexagon center={bottom} sideLength={sideLength}  padding={padding} color="#db14d8" hoverColor="#8f0d8d" scale={scale}/>
                <Hexagon center={bottomLeft} sideLength={sideLength}  padding={padding} color="#6f13d1" hoverColor="#520c9c" scale={scale}/>
              </Container>
            </TransformComponent>
          </>
        )
      }
    </TransformWrapper>
  );
}

const Container = styled.div`
  border: 2px solid red;
  box-sizing: border-box;
  
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;