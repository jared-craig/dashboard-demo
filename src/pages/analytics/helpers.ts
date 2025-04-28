export const getGaugeColor = (value: number) => {
  const r = Math.round(255 * (1 - value / 100));
  const g = Math.round(180 * (value / 100));
  return `rgb(${r},${g},10)`;
};
