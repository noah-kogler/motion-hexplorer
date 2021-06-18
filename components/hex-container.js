import Hexagon from "./hexagon";
import { useState } from "react";
import { nextPosition } from "../tools/geometry";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: props => props.width + 'px',
    height: props => props.height + 'px',
  },
});

export default function HexContainer({width, height, scale, sideLength, halfHeight}) {
  const [moving, setMoving] = useState(false);
  const classes = useStyles({width, height});
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
    <div className={classes.container} onTouchMoveCapture={onTouchMove} onTouchStart={onTouchStart}>
      <Hexagon
        center={central}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        title="Noah Kogler"
        image="/content/avatar.jpeg"
        isAvatar={true}
        link="/profile" />
      <Hexagon
        center={topLeft}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Körperstruktur 1"
        title="Siu Nim Tao"
        image="/content/kettenfauststoss.svg"
        link="/details" />
      <Hexagon
        center={top}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Positionen 1"
        title="Keilstoß"
        image="/content/kniestoss-mit-halten.svg"
        link="/details" />
      <Hexagon
        center={topRight}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Schlag 1"
        title="Kettenfauststoß"
        link="/details" />
      <Hexagon
        center={bottomRight}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="done"
        category="Infight 1"
        title="Ellbogenschlag horizontal"
        link="/details" />
      <Hexagon
        center={bottomRight2}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="in-progress"
        category="Infight 2"
        title="Ellbogenschlag vertikal"
        link="/details" />
      <Hexagon
        center={bottomRight3}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Infight 3"
        title="Ellbogenschlag unterstützt"
        link="/details" />
      <Hexagon
        center={bottomRight4}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Infight 4"
        title="Kniestoß mit Halten"
        link="/details" />
      <Hexagon
        center={bottom}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Tritt 1"
        title="Vorwärtstritt stehend"
        link="/details" />
      <Hexagon
        center={bottomLeft}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        status="todo"
        category="Drill 1"
        title="Tritt zu Ellbogenstoß"
        link="/details" />
    </div>
  );
}
