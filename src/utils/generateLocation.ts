const LVIV_BOUNDS = {
  latMin: 49.79, // південь
  latMax: 49.9, // північ
  lngMin: 23.95, // захід
  lngMax: 24.11, // схід
};
type Location = {
  lat: number;
  lng: number;
};

export const generateLvivLocationFromId = (id: number): Location => {
  const { latMin, latMax, lngMin, lngMax } = LVIV_BOUNDS;

  const latSeed = (id * 9301 + 49297) % 233280;
  const lngSeed = (id * 233280 + 9301) % 49297;

  const lat = latMin + (latSeed / 233280) * (latMax - latMin);
  const lng = lngMin + (lngSeed / 49297) * (lngMax - lngMin);

  return {
    lat: Number(lat.toFixed(6)),
    lng: Number(lng.toFixed(6)),
  };
};
