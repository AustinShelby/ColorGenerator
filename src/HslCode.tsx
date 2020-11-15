export const HslCode = (
  hue: number,
  saturation: number,
  lightness: number,
  index: number
) => {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
