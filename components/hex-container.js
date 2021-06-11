import Hexagon from "./hexagon";
import styled from "styled-components";
import { useState } from "react";
import { nextPosition } from "../tools/geometry";

export default function HexContainer({width, height, scale, sideLength, halfHeight}) {
  const [moving, setMoving] = useState(false);

  const central = {x: width / 2, y: height / 2 };
  const topLeft = nextPosition(central, sideLength, halfHeight, 'top-left');
  const top = nextPosition(central, sideLength, halfHeight, 'top');
  const topRight = nextPosition(central, sideLength, halfHeight, 'top-right');
  const bottomRight = nextPosition(central, sideLength, halfHeight, 'bottom-right');
  const bottomRight2 = nextPosition(bottomRight, sideLength, halfHeight, 'bottom-right');
  const bottomRight3 = nextPosition(bottomRight2, sideLength, halfHeight, 'bottom-right');
  const bottomRight4 = nextPosition(bottomRight3, sideLength, halfHeight, 'bottom');
  const bottom = nextPosition(central, sideLength, halfHeight, 'bottom');
  const bottomLeft = nextPosition(central, sideLength, halfHeight, 'bottom-left');

  function onTouchStart () {
    setMoving(false); // clear the moving state of the previous touch
  }

  function onTouchMove () {
    setMoving(true);
  }

  return (
    <Container width={width} height={height} onTouchMoveCapture={onTouchMove} onTouchStart={onTouchStart}>
      <Hexagon
        center={central}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        title="Noah Kogler"
        image="/content/avatar.jpeg"
        isAvatar={true} />
      <Hexagon
        center={topLeft}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Körperstruktur"
        title="Siu Nim Tao"
        image="/content/kettenfauststoss.svg" />
      <Hexagon
        center={top}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Positionen"
        title="Keilstoß"
        image="/content/kniestoss-mit-halten.svg" />
      <Hexagon
        center={topRight}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Schlag"
        title="Kettenfauststoß" />
      <Hexagon
        center={bottomRight}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="done"
        category="Infight"
        title="Ellbogenschlag horizontal" />
      <Hexagon
        center={bottomRight2}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="in-progress"
        category="Infight"
        title="Ellbogenschlag vertikal" />
      <Hexagon
        center={bottomRight3}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Infight"
        title="Ellbogenschlag unterstützt" />
      <Hexagon
        center={bottomRight4}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Infight"
        title="Kniestoß mit Halten" />
      <Hexagon
        center={bottom}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Tritt"
        title="Vorwärtstritt stehend" />
      <Hexagon
        center={bottomLeft}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Drill"
        title="Tritt zu Ellbogenstoß"/>
    </Container>
  );
}

const Container = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
