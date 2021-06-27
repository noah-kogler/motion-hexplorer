import { hexHalfHeight } from "../../tools/geometry";
import { makeStyles } from '@material-ui/core/styles';
import { adjustColor, colorForStatus } from "../../tools/color";

const useStyles = makeStyles({
  svg: {
    width: '100%',
    height: '100%',
  },
  avatarMask: {
    fill: 'white',
    stroke: 'black',
    strokeWidth: 4,
  },
  polygon: {
    stroke: props => props.isAvatar ? '#292F36' : adjustColor(props.color, -30),
    strokeWidth: 4,
    fill: props => props.isAvatar ? '' : props.color,
    filter: props => props.shadow ? 'drop-shadow(2px 2px 2px rgba(0, 0, 0, .2))' : 'none',
  },
  bottomTextContainer: {
    margin: '0 3rem',
    display: 'flex',
    height: '100%',
  },
  topText: {
    fontWeight: 'bold',
    fontSize: '.6rem',
    textAlign: 'center',
    width: '100%',
    color: props => adjustColor(props.color, -60),
  },
  bottomText: {
    fontSize: '.8rem',
    alignSelf: 'flex-end',
    textAlign: 'center',
    width: '100%',
    fontFamily: "'M PLUS Rounded 1c', sans-serif",
  },
});

export default function HexagonSvg({
    center,
    containerSideLength,
    scale,
    shadow,
    status,
    category,
    title,
    image,
    isAvatar = false
}) {
  let color = isAvatar ? '#000000' : colorForStatus(status);
  const classes = useStyles({color, shadow, isAvatar});

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

  let footerY, imageX, imageY, imageHeight, showDetails;
  if (scale >= 1) {
    footerY = '65%';
    imageX = '32%';
    imageY = '20%';
    imageHeight = '50%';
    showDetails = true;
  } else {
    imageX = '20%';
    imageY = '10%';
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
                  points={points.map(({x, y}) => x + ',' + y).join(' ')}
                  className={classes.avatarMask}  />
              </mask>
              <image
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
                  <foreignObject x="-35%" y="32%" width={sideLength} height="10%" transform={`rotate(300)`}>
                    <div className={classes.topText}>{category}</div>
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
                    <div className={classes.bottomTextContainer} xmlns="http://www.w3.org/1999/xhtml">
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
