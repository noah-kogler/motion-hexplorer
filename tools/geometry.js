function rad(degree) {
  return degree * Math.PI / 180;
}

export function hexHalfHeight(sideLength) {
  return sideLength * Math.cos(rad(30));
}

export function zoom(value, min, max, delta) {
  return Math.min(Math.max(min, value + delta), max)
}