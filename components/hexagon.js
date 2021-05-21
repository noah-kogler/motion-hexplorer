import styled from "styled-components";
import { useState } from "react";
import HexagonSvg from "./svg/hexagon";
import { hexHalfHeight } from "../tools/geometry";
import { useRouter } from "next/router";

export default function Hexagon ({ sideLength, center, color, hoverColor, onActivate, moving, ...svgProps }) {
  const router = useRouter();
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);

  const halfHeight = hexHalfHeight(sideLength);
  const width = 2 * sideLength;
  const height = 2 * halfHeight;

  function onMouseEnter () {
    setHover(true);
  }

  function onMouseLeave () {
    setHover(false);
  }

  function onMouseDown () {
    setPressed(true);
  }

  function onMouseUp () {
    setPressed(false);
    router.push('/details');
  }

  function onTouchStart () {
    if (!moving) {
      setPressed(true);
    }
  }

  function onTouchEnd () {
    if (!moving) {
      router.push('/details');
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
    <Container
      width={width}
      height={height}
      top={center.y - halfHeight}
      left={center.x - sideLength}
      pressed={pressed}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchCancel={onTouchCancel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <HexagonSvg
        center={{x: sideLength, y: halfHeight}}
        containerSideLength={sideLength}
        color={hover ? hoverColor : color}
        {...svgProps} />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: ${props => props.pressed ? props.top + 5 : props.top}px;
  left: ${props => props.pressed ? props.left + 5 : props.left}px;
  width: ${props => props.pressed ? props.width - 10 : props.width}px;
  height: ${props => props.pressed ? props.height - 10 : props.height}px;
  transition: width .25s, height .25s, top .25s, left .25s;
  cursor: pointer;
`;
