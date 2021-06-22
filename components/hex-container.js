import Hexagon from "./hexagon";
import { useState } from "react";
import { nextPosition } from "../tools/geometry";
import { makeStyles } from "@material-ui/core/styles";
import useSWR from "swr";
import fetchJson from "../tools/fetcher";

const useStyles = makeStyles({
  container: {
    width: props => props.width + 'px',
    height: props => props.height + 'px',
  },
});

export default function HexContainer({width, height, scale, sideLength, halfHeight}) {
  const [moving, setMoving] = useState(false);
  const classes = useStyles({width, height});
  const { data: lessons, error } = useSWR('/api/lesson', fetchJson);

  if (error) {
    return <div>Failed to load. Error: {error.message}</div>;
  }
  if (!lessons) {
    return <div>loading...</div>;
  }

  const positions = {};
  positions.central = {x: width / 2, y: height / 2 };
  positions.topLeft = nextPosition(positions.central, sideLength, halfHeight, 'top-left');
  positions.top = nextPosition(positions.central, sideLength, halfHeight, 'top');
  positions.topRight = nextPosition(positions.central, sideLength, halfHeight, 'top-right');
  positions.bottomRight = nextPosition(positions.central, sideLength, halfHeight, 'bottom-right');
  positions.bottomRight2 = nextPosition(positions.bottomRight, sideLength, halfHeight, 'bottom-right');
  positions.bottomRight3 = nextPosition(positions.bottomRight2, sideLength, halfHeight, 'bottom-right');
  positions.bottomRight4 = nextPosition(positions.bottomRight3, sideLength, halfHeight, 'bottom');
  positions.bottom = nextPosition(positions.central, sideLength, halfHeight, 'bottom');
  positions.bottomLeft = nextPosition(positions.central, sideLength, halfHeight, 'bottom-left');

  function onTouchStart () {
    setMoving(false); // clear the moving state of the previous touch
  }

  function onTouchMove () {
    setMoving(true);
  }

  return (
    <div className={classes.container} onTouchMoveCapture={onTouchMove} onTouchStart={onTouchStart}>
      <Hexagon
        key="avatar"
        center={positions.central}
        sideLength={sideLength}
        scale={scale}
        moving={moving}
        title="Noah Kogler"
        image="/content/avatar.jpeg"
        isAvatar={true}
        link="/profile" />
      {
        lessons.map(lesson => <Hexagon
          key={lesson.id}
          center={positions[lesson.position]}
          sideLength={sideLength}
          scale={scale}
          moving={moving}
          status={lesson.status}
          category={lesson.category}
          title={lesson.title}
          image={lesson.image}
          link={`/lesson/${lesson.id}`}/>)
      }
    </div>
  );
}
