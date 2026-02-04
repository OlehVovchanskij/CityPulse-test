import { formatDate } from '../formateDate';

describe('formatDate', () => {
  it('formats date in uk-UA locale', () => {
    const date = new Date(2026, 0, 2); // 02 January 2026
    const formatted = formatDate(date);

    expect(formatted).toContain('2026');
    expect(formatted).toContain('02');
  });

  it('returns a string', () => {
    const result = formatDate(new Date());
    expect(typeof result).toBe('string');
  });

  it('is deterministic for the same date', () => {
    const date = new Date(2026, 5, 15);
    const a = formatDate(date);
    const b = formatDate(date);
    expect(a).toBe(b);
  });
});
