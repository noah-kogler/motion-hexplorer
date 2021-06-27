import { useState } from "react";
import HexagonSvg from "./svg/hexagon";
import { hexHalfHeight } from "../tools/geometry";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    top: props => (props.pressed ? props.top + 2 : props.top) + 'px',
    left: props => (props.pressed ? props.left + 2 : props.left) + 'px',
    width: props => (props.pressed ? props.width - 4 : props.width) + 'px',
    height: props => (props.pressed ? props.height - 4 : props.height) + 'px',
    transition: 'width .25s, height .25s, top .25s, left .25s',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(75%)',
    }
  },
});

export default function Hexagon ({ sideLength, center, onActivate, moving, link, ...svgProps }) {
  const router = useRouter();
  const [pressed, setPressed] = useState(false);

  const halfHeight = hexHalfHeight(sideLength);
  const width = 2 * sideLength;
  const height = 2 * halfHeight;
  const classes = useStyles({width, height, top: center.y - halfHeight, left: center.x - sideLength, pressed});

  function onMouseDown (event) {
    if (event.button === 0) {
      setPressed(true);
    }
  }

  function onMouseUp (event) {
    if (event.button === 0) {
      setPressed(false);
      router.push(link);
    }
  }

  function onTouchStart () {
    if (!moving) {
      setPressed(true);
    }
  }

  function onTouchEnd () {
    if (!moving) {
      router.push(link);
    }
    setPressed(false);
  }

  function onTouchCancel () {
    setPressed(false);
  }

  function onTouchMove () {
    setPressed(false);
  }

  return (
    <div
      className={classes.container}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchCancel={onTouchCancel}>
      <HexagonSvg
        center={{x: sideLength, y: halfHeight}}
        containerSideLength={sideLength}
        shadow={!pressed}
        {...svgProps} />
    </div>
  );
}
