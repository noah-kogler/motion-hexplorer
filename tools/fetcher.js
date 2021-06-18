export default async function fetchJson(...args) {
  const res = await fetch(...args);
  return res.json();
};