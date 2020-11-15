module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      colors: {
        blue: {
          50: "hsl(208, 75%, 95%)",
          100: "hsl(208, 70%, 86%)",
          200: "hsl(208, 65%, 76%)",
          300: "hsl(208, 62%, 67%)",
          400: "hsl(208, 61%, 57%)",
          500: "hsl(208, 60%, 48%)",
          600: "hsl(208, 61%, 38%)",
          700: "hsl(208, 62%, 29%)",
          800: "hsl(208, 65%, 19%)",
          900: "hsl(208, 70%, 10%)",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
