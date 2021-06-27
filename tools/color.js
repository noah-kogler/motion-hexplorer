export function colorForStatus(status) {
  switch(status) {
    case 'todo': return '#7D8E99';
    case 'in-progress': return '#DB770D';
    case 'done': return '#E7CCA3';
    default: throw new Error(`Status ${status} isn't supported.`);
  }
}

export function adjustColor(color, amount) {
  const num = parseInt(color.substring(1), 16);
  const r = inScope((num >> 16) + amount);
  const b = inScope(((num >> 8) & 0x00FF) + amount);
  const g = inScope((num & 0x0000FF) + amount);
  const newColor = g | (b << 8) | (r << 16);
  return '#' + newColor.toString(16);
}

function inScope(color) {
  return Math.min(Math.max(color, 0), 255);
}
