import { hexHalfHeight } from "../../tools/geometry";
import styled from "styled-components";
import { adjustColor, colorForStatus } from "../../tools/color";

export default function HexagonSvg({
    center,
    containerSideLength,
    scale,
    shadow,
    hover,
    status,
    category,
    title,
    image = '/placeholder.svg',
    isAvatar = false
}) {
  let color = isAvatar ? '#000000' : colorForStatus(status);
  if (hover) {
    color = adjustColor(color, -20);
  }

  const padding = containerSideLength / 10;
  const sideLength = containerSideLength - padding;
  const halfHeight = hexHalfHeight(sideLength);
  const halfSide = sideLength / 2;
  const width = 2 * containerSideLength;
  const points = [
    { x: center.x - halfSide, y: center.y - halfHeight }, // topLeft
    { x: center.x + halfSide, y: center.y - halfHeight }, // topRight
    { x: center.x + sideLength, y: center.y }, // centerRight
    { x: center.x + halfSide, y: center.y + halfHeight }, // bottomRight
    { x: center.x - halfSide, y: center.y + halfHeight }, // bottomLeft
    { x: center.x - sideLength, y: center.y }, // centerLeft
  ];

  let headerY, footerY, imageX, imageY, imageHeight, showDetails;
  if (scale >= 1) {
    headerY = '10%';
    footerY = '65%';
    imageX = '16%';
    imageY = '18%';
    imageHeight = '60%';
    showDetails = true;
  } else {
    imageX = '8%';
    imageY = '8%';
    imageHeight = '75%';
    showDetails = false;
  }

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 " + width + " " + (2 * hexHalfHeight(containerSideLength))}>
      <Polygon
        points={points.map(({x, y}) => x + ',' + y).join(' ')}
        color={color}
        shadow={shadow} />
      {
        isAvatar
        ? (
            <>
              <mask id="avatar-mask">
                <Polygon
                  points={points.map(({x, y}) => x + ',' + y).join(' ')}
                  fill="white" />
              </mask>
              <Avatar x="0%" y="0%" width="100%" height="100%" mask="url(#avatar-mask)" xlinkHref={image} hover={hover} />
            </>
          )
        : (
            <>
              { showDetails && (
                  <foreignObject y={headerY} width="100%" height="10%">
                    <TextContainer xmlns="http://www.w3.org/1999/xhtml">
                      <TopText color={adjustColor(color, -70)}>{category}</TopText>
                    </TextContainer>
                  </foreignObject>
                )
              }
              <image
                x={imageX}
                y={imageY}
                height={imageHeight}
                xlinkHref={image}/>
              { showDetails && (
                  <foreignObject y={footerY} width="100%" height="25%">
                    <TextContainer xmlns="http://www.w3.org/1999/xhtml">
                      <BottomText>{title}</BottomText>
                    </TextContainer>
                  </foreignObject>
                )
              }
            </>
          )
      }
    </Svg>
  );
}

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

const Polygon = styled.polygon`
  stroke: #333333;
  transition: stroke .25s;
  stroke-width: 2;
  fill: ${props => props.color};
  filter: ${props => props.shadow ? 'drop-shadow(2px 2px 2px rgba(0, 0, 0, .7))' : 'none'};
`;

const Avatar = styled.image`
  filter: ${props => props.hover ? 'brightness(75%)' : 'none'};
`;

const TextContainer = styled.div`
  margin: 0 3rem;
  display: flex;
  height: 100%;
`;

const TopText = styled.div`
  font-weight: bold;
  font-size: .6rem;
  align-self: flex-start;
  text-align: center;
  width: 100%;
  color: ${props => props.color};
`;

const BottomText = styled.div`
  font-size: .8rem;
  align-self: flex-end;
  text-align: center;
  width: 100%;
`;