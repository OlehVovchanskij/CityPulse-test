import { generateLvivLocationFromId } from '../generateLocation';

describe('generateLvivLocationFromId', () => {
  it('returns lat and lng numbers', () => {
    const location = generateLvivLocationFromId(1);

    expect(typeof location.lat).toBe('number');
    expect(typeof location.lng).toBe('number');
  });

  it('generates coordinates within Lviv bounds', () => {
    const { lat, lng } = generateLvivLocationFromId(42);

    expect(lat).toBeGreaterThanOrEqual(49.79);
    expect(lat).toBeLessThanOrEqual(49.9);

    expect(lng).toBeGreaterThanOrEqual(23.95);
    expect(lng).toBeLessThanOrEqual(24.11);
  });

  it('is deterministic for the same id', () => {
    const a = generateLvivLocationFromId(100);
    const b = generateLvivLocationFromId(100);

    expect(a).toEqual(b);
  });

  it('produces different locations for different ids', () => {
    const a = generateLvivLocationFromId(1);
    const b = generateLvivLocationFromId(2);

    expect(a).not.toEqual(b);
  });

  it('limits precision to 6 decimal places', () => {
    const { lat, lng } = generateLvivLocationFromId(7);

    expect(lat.toString().split('.')[1]?.length).toBeLessThanOrEqual(6);
    expect(lng.toString().split('.')[1]?.length).toBeLessThanOrEqual(6);
  });
});
