// ----------------------------------------------------------------------
import { palette, kompassColors } from "./palette";

export const pxToRem = (value) => {
  return `${value / 16}rem`;
};

export const responsiveFontSizes = (sm, md, lg) => {
  return {
    "@media (max-width:600px)": {
      // fontFamily: 'Outfit',
      fontSize: `${pxToRem(sm)}!important`,
      lineHeight: `${pxToRem(sm)}!important`,
    },
    "@media (max-width:900px)": {
      fontSize: pxToRem(md),
      lineHeight: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
      lineHeight: pxToRem(lg),
    },
  };
};

const typography = {
  fontFamily: ['Outfit'].join(','),
  
  button: {
    fontWeight: 400,
    lineHeight: 30 / 14,
    fontSize: pxToRem(20),
    textTransform: "inherit",
    ...responsiveFontSizes(14, 16, 20),
  },
  li: {
    fontWeight: 400,
    lineHeight: 30 / 14,
    fontSize: pxToRem(20),
    textTransform: "inherit",
    ...responsiveFontSizes(14, 16, 20),
  },
  h1: {
    fontSize: pxToRem(36),
    lineHeight: pxToRem(43),
    fontWeight: 700,
    ...responsiveFontSizes(20, 26, 36),
  },
  h2: {
    fontSize: pxToRem(30),
    lineHeight: pxToRem(36),
    fontWeight: 700,
    marginBottom: pxToRem(24),
    ...responsiveFontSizes(20, 25, 30),
  },
  h3: {
    fontSize: pxToRem(26),
    lineHeight: pxToRem(26),
    fontWeight: 700,
    color: palette.primary.light,
    ...responsiveFontSizes(18, 20, 26),
  },
  heading: {
    fontSize: pxToRem(26),
    lineHeight: pxToRem(26),
    fontWeight: 600,
    color: palette.primary.light,
    ...responsiveFontSizes(18, 20, 26),
  },
  h4: {
    fontSize: pxToRem(22),
    lineHeight: pxToRem(31),
    fontWeight: 400,
    color: palette.primary.light,
    ...responsiveFontSizes(16, 20, 22),
  },
  h5: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(21),
    fontWeight: 400,
    color: palette.secondary.contrast,
    marginBottom: pxToRem(21),
    ...responsiveFontSizes(12, 14, 16),
  },
  h6: {
    fontSize: pxToRem(22),
    lineHeight: pxToRem(26),
    fontWeight: 400,
    color: palette.primary.contrast,
    ...responsiveFontSizes(14, 18, 22),
  },
  subtitle1: {
    fontSize: pxToRem(16),
    lineHeight: `${pxToRem(19)}!important`,
    fontWeight: 500,
    color: palette.primary.light,
    ...responsiveFontSizes(12, 14, 16),
  },
  subtitle2: {
    fontSize: pxToRem(22),
    lineHeight: pxToRem(26),
    fontWeight: 600,
    color: palette.primary.light,
    ...responsiveFontSizes(14, 18, 22),
  },
  body1: {
    fontSize: pxToRem(20),
    lineHeight: pxToRem(30),
    fontWeight: 400,
    color: palette.common.white,
    ...responsiveFontSizes(16, 18, 20),
  },
  caption: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(16),
    fontWeight: 500,
    color: palette.primary.light,
    ...responsiveFontSizes(12, 14, 16),
  },
  heading2: {
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
    fontWeight: 400,
    color: palette.primary.light,
    ...responsiveFontSizes(8, 10, 12),
  },
};

const FilterInputProps={
  sx: {
    padding: "0.1rem",
    backgroundColor: "white",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    fontFamily: "Outfit",
    fontSize: "12px",
    height: "35px", 
  },
}

const BaseInputProps={
  sx: {
    padding: "0.2rem",
    // backgroundColor: "white",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    fontFamily: "Outfit",
    fontSize: "17px",
    height: "45px"
  },
}

export { typography, FilterInputProps, BaseInputProps };
