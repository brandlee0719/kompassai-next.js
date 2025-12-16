/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "0.65rem",
        sm: "0.775rem",
        base: "0.9rem",
        lg: "1.025rem",
        xl: "1.15rem",
        "2xl": "1.3rem",
        "2.5xl": "1.45rem",
        "3xl": "1.675rem",
        "4xl": "1.8rem",
        "5xl": "2.3rem",
        "6xl": "3.55rem",
        "8xl": "5.8rem",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundColor: {
        "051F21": "#051F21",
      },
      colors: {
        primary: {
          100: "#E6F6FE",
          200: "#C0EAFC",
          300: "#9ADDFB",
          400: "#4FC3F7",
          500: "#03A9F4",
          600: "#0398DC",
          700: "#026592",
          800: "#014C6E",
          900: "#013349",
        },
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          850: "#2A2A2A",
          900: "#1a202c",
          950: "#090C05",
        },
        teal: {
          950: "#0A2E31",
        },
        zinc: {
          900: "#1C1B1F",
          200: "#D9E7E6",
          100: "#F3F3F3",
        },
        neutral: {
          300: "#B6C8C9",
          400: "#919191",
        },
        stone: {
          50: "#F4F4F8",
          150: "#F9F9F9", 
          200: "#E7E6E6",
          250: "#E8E7E7",
          300: "#BEBEBE",
          350: "#929292",
          950: "#090C05",
        },
        amber: {
          500: "#FFA800",
        },
        magenta: {
          500: "#E7436A",
        },
        emerald: {
          200: "#ECF4F3",
          300: "#DEEBE9",
          500: "#0A2E31",
        },

        bluegrey: {
          100: "#F7F9FD",
          200: "#DCEAFE",
        },

        accents: {
          "green": "#4CD66E",
          "darkGreen": "#327943",
          "yellow": "#F8E665", 
          "gold": "#FFB951",
          "purple": "#F1A9FF",
          "hotPurple": "#E743B9",
          "blue": "#9AB2FF", 
          "darkBlue": "#454EAF", 
          "orange": "#FF9665",
          "darkOrange": "#FF702D", 
          "warning": "#E7436A",
        }
      },
    },
    lineHeight: {
      hero: "4.5rem",
    },
    boxShadow: {
      custom: "0px 4px 34px 0px rgba(0, 0, 0, 0.16)", // Define the custom shadow
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
    screens: {
      "2xs": "400px",
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};

// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         teal: {
//           950: "#0A2E31",
//         },
//         zinc: {
//           900: "#1C1B1F",
//           200: "#D9E7E6",
//           100: "#F3F3F3",
//         },
//         neutral: {
//           300: "#B6C8C9",
//           400: "#919191",
//         },
//         stone: {
//           200: "#E7E6E6",
//           300: "#BEBEBE",
//           950: "#FFFFFF",
//         },
//         amber: {
//           500: "#FFA800",
//         },
//         rose: {
//           100: "#FFE4EB",
//           500: "#E7436A",
//         },
//       },
//     },
//     screens: {
//       "2xs": "400px",
//       xs: "540px",
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//       "2xl": "1536px",
//     },
//   },
//   function({ addVariant }) {
//     addVariant("child", "& label");
//   },
// });

// fontSize: {
//   xs: "0.75rem",
//   sm: "0.875rem",
//   base: "1rem",
//   lg: "1.125rem",
//   xl: "1.25rem",
//   "2xl": "1.5rem",
//   "3xl": "1.875rem",
//   "4xl": "2rem",
//   "5xl": "2.5rem",
//   "6xl": "3.75rem",
//   "8xl": "6rem",
// },
