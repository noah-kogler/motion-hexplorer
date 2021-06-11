export function colorForStatus(status) {
  switch(status) {
    case 'todo': return '#7D8E99';
    case 'in-progress': return '#D5CC4A';
    case 'done': return '#59934A';
    default: throw new Error(`Status ${status} isn't supported.`);
  }
}

export function adjustColor(color, amount) {
  const num = parseInt(color.substring(1), 16);
  const r = (num >> 16) + amount;
  const b = ((num >> 8) & 0x00FF) + amount;
  const g = (num & 0x0000FF) + amount;
  const newColor = g | (b << 8) | (r << 16);
  return '#' + newColor.toString(16);
}
