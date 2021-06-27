export default async function fetchJson(...args) {
  const res = await fetch(...args);
  if (res.status >= 400) {
    throw new Error(`Status: ${res.status} ${res.statusText}`);
  }
  return res.json();
};