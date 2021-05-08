function rad(degree) {
  return degree * Math.PI / 180;
}

export function hexHalfHeight(sideLength) {
  return sideLength * Math.cos(rad(30));
}
