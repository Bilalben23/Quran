export function fetchData(api) {
  async function fetchData() {
    const res = await fetch(api);
    const data = await res.json();
    return data;
  }
  return fetchData();
}
