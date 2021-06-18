import { hexHalfHeight } from "../../tools/geometry";
import { makeStyles } from '@material-ui/core/styles';
import { adjustColor, colorForStatus } from "../../tools/color";

const useStyles = makeStyles({
  svg: {
    width: '100%',
    height: '100%',
  },
  polygon: {
    stroke: '#333333',
    transition: 'stroke .25s',
    strokeWidth: 2,
    fill: props => props.isAvatar ? '' : (props.hover ? adjustColor(props.color, -20) : props.color),
    filter: props => props.shadow ? 'drop-shadow(2px 2px 2px rgba(0, 0, 0, .7))' : 'none',
  },
  avatar: {
    filter: props => props.hover ? 'brightness(75%)' : 'none',
  },
  textContainer: {
    margin: '0 3rem',
    display: 'flex',
    height: '100%',
  },
  topText: {
    fontWeight: 'bold',
    fontSize: '.6rem',
    alignSelf: 'flex-start',
    textAlign: 'center',
    width: '100%',
    color: props => adjustColor(props.color, -70),
  },
  bottomText: {
    fontSize: '.8rem',
    alignSelf: 'flex-end',
    textAlign: 'center',
    width: '100%',
  },
});

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
  const classes = useStyles({color, shadow, hover, isAvatar});

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 " + width + " " + (2 * hexHalfHeight(containerSideLength))}
      className={classes.svg}>
      <polygon
        className={classes.polygon}
        points={points.map(({x, y}) => x + ',' + y).join(' ')} />
      {
        isAvatar
        ? (
            <>
              <mask id="avatar-mask">
                <polygon
                  className={classes.polygon}
                  points={points.map(({x, y}) => x + ',' + y).join(' ')}
                  fill="white" />
              </mask>
              <image
                className={classes.avatar}
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                mask="url(#avatar-mask)"
                xlinkHref={image} />
            </>
          )
        : (
            <>
              { showDetails && (
                  <foreignObject y={headerY} width="100%" height="10%">
                    <div className={classes.textContainer} xmlns="http://www.w3.org/1999/xhtml">
                      <div className={classes.topText}>{category}</div>
                    </div>
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
                    <div className={classes.textContainer} xmlns="http://www.w3.org/1999/xhtml">
                      <div className={classes.bottomText}>{title}</div>
                    </div>
                  </foreignObject>
                )
              }
            </>
          )
      }
    </svg>
  );
}
