export const pointToLatLong = (point?: string) => {
  if (!point) return undefined;

  const coords = point.match(/POINT\(([^ ]+) ([^ ]+)\)/);
  if (!coords) return undefined;

  const long = parseFloat(coords[1]);
  const lat = parseFloat(coords[2]);

  return { lat, long };
};
