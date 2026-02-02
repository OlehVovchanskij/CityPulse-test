export const generateDateFromId = (id: number) => {
  const baseDate = new Date(2026, 0, 1);
  const result = new Date(baseDate);

  result.setDate(baseDate.getDate() + id);

  return result;
};
