interface HslShade {
  shade: number;
  hue: number;
  saturation: number;
  lightness: number;
}
export const ShadeGenerator = (
  shades: number[],
  hue: number,
  saturation: number,
  endSaturation: number
): HslShade[] => {
  const calculateSaturation = (saturation: number, index: number): number => {
    const calculatedValue = Math.round(
      saturation + Math.abs(4.5 - index) * endSaturation
    );
    if (calculatedValue < 0) {
      return 0;
    } else if (calculatedValue > 100) {
      return 100;
    } else {
      return calculatedValue;
    }
  };
  return shades.map((shade, index) => ({
    hue: hue,
    saturation: calculateSaturation(saturation, index),
    shade: shade,
    lightness: 95 - 10 * index,
  }));
};
