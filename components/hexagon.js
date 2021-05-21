import styled from "styled-components";
import { useState } from "react";
import HexagonSvg from "./svg/hexagon";
import { hexHalfHeight } from "../tools/geometry";

export default function Hexagon ({ sideLength, center, color, hoverColor, ...svgProps }) {
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);

  const togglePressed = () => { setPressed(!pressed); };
  const toggleHover = () => { setHover(!hover); };

  const halfHeight = hexHalfHeight(sideLength);
  const width = 2 * sideLength;
  const height = 2 * halfHeight;

  return (
    <Container
      width={width}
      height={height}
      top={center.y - halfHeight}
      left={center.x - sideLength}
      pressed={pressed}
      onMouseDown={togglePressed}
      onMouseUp={togglePressed}
      onTouchStart={togglePressed}
      onTouchEnd={togglePressed}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
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
