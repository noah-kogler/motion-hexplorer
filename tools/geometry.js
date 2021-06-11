function rad(degree) {
  return degree * Math.PI / 180;
}

export function hexHalfHeight(sideLength) {
  return sideLength * Math.cos(rad(30));
}

export function nextPosition(position, sideLength, halfHeight, direction) {
  switch (direction) {
    case 'top-left': return {x: position.x - 3 * sideLength / 2, y: position.y - halfHeight };
    case 'top': return {x: position.x, y: position.y - 2 * halfHeight };
    case 'top-right': return {x: position.x + 3 * sideLength / 2, y: position.y - halfHeight };
    case 'bottom-right': return {x: position.x + 3 * sideLength / 2, y: position.y + halfHeight };
    case 'bottom': return {x: position.x, y: position.y + 2 * halfHeight };
    case 'bottom-left': return {x: position.x - 3 * sideLength / 2, y: position.y + halfHeight };
    default: throw new Error(`Direction ${direction} isn't supported.`);
  }
}
