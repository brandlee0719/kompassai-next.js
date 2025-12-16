// SETUP COLORS
const PRIMARY = {
  main: "#11734A",
  contrast: "#AFE8AE",
  contrastText: "#fff",
  light: "#3E4240"
};

const SECONDARY = {
  main: "#3366FF",
  contrastText: "#fff",
  contrast: "#9BA19D",
  light: "#F7F9FA",
};

const kompassColors = {
  light: "#E8E7E7",
  bgLight: "#F9F9F9",
  textLight: "#929292",
  black: "#090C05",
  blue: "#3b82f6", 
  bgLightBlue: "#F7F9FD",
  accent: {
    green: "#59DB79",
    yellow: "#F8E665",
    purple: "#F1A9FF",
    blue: "#9AB2FF", 
    orange: "#FF9665"
  }
};

const palette = {
  common: { black: "#000", white: "#fff", bgColor: "#F7F9FA" },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
};

export { palette, kompassColors };
