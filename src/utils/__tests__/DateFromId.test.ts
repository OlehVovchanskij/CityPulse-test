import { generateDateFromId } from '../DateFromId';

describe('generateDateFromId', () => {
  it('returns a Date instance', () => {
    const result = generateDateFromId(1);
    expect(result).toBeInstanceOf(Date);
  });

  it('generates correct date based on id', () => {
    const date = generateDateFromId(1);
    expect(date.getFullYear()).toBe(2026);
    expect(date.getMonth()).toBe(0); // January
    expect(date.getDate()).toBe(2); // 1 Jan + 1
  });

  it('is deterministic for the same id', () => {
    const a = generateDateFromId(10).getTime();
    const b = generateDateFromId(10).getTime();
    expect(a).toBe(b);
  });

  it('does not mutate base date', () => {
    const first = generateDateFromId(5);
    const second = generateDateFromId(5);
    expect(first.getTime()).toBe(second.getTime());
  });
});
