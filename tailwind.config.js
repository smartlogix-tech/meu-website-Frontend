/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-1": "#17202a",
        white: "#fff",
        "dark-4": "#3a444c",
        silver: "#c4c4c4",
        "primary-blue": "#29bdd8",
        dark6: "#8899a6",
        "dark-2": "#1c2733",
        crimson: "#f4245e",
        "dark-3": "#283340",
        "dark-7": "#ebeef0",
        "dark-5": "#5b7083",
        black: "#0f1419",
        steelblue: {
          "100": "#3b94d0",
          "200": "#517da2",
        },
        darkgray: {
          "100": "#9b9b9b",
          "200": "#95999a",
        },
        black1: "#000",
        whitesmoke: "#f8fafc",
        gainsboro: {
          "100": "#dee0e3",
          "200": "#d9d9d9",
        },
        gray: {
          "100": "#8d8e90",
          "200": "#828282",
          "300": "rgba(255, 255, 255, 0)",
          "400": "rgba(23, 32, 42, 0.9)",
        },
        lightgray: "#cdd1d0",
        cornflowerblue: "#508ad7",
        mistyrose: "#eedad8",
        darkblue: "rgba(61, 39, 192, 0)",
        mediumpurple: "#8270e2",
        darkslategray: {
          "100": "#4a4a4a",
          "200": "#424a52",
        },
        cadetblue: {
          "100": "#0fa3bf",
          "200": "rgba(15, 163, 191, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "reem-kufi": "'Reem Kufi'",
        "headline-15px-medium": "Roboto",
        poppins: "Poppins",
        lato: "Lato",
        outfit: "Outfit",
      },
      borderRadius: {
        "9980xl": "9999px",
        "99980xl": "99999px",
        "6xs-7": "6.7px",
        "3xs": "10px",
        "81xl": "100px",
        "21xl": "40px",
        "11xs-8": "1.8px",
        "4xl": "23px",
      },
    },
    fontSize: {
      base: "16px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "27xl": "46px",
      "9xl": "28px",
      "18xl": "37px",
      sm: "14px",
      mini: "15px",
      xl: "20px",
      lgi: "19px",
      smi: "13px",
      lg: "18px",
      "5xl": "24px",
      xs: "12px",
      "base-5": "15.5px",
      "mini-8": "14.8px",
      inherit: "inherit",
    },
    screens: {
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
