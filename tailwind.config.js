/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      xsm: "360px",
      xs: "476px",
      // xs: "425px",
      sm: "640px",
      md: "768px",
      bs: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1550px",

      "2xl-mx": { max: "1535px" },
      "xl-mx": { max: "1279px" },
      "lg-mx": { max: "1023px" },
      "bs-mx": { max: "899px" },
      "md-mx": { max: "767px" },
      "sm-mx": { max: "639px" },
      "xs-mx": { max: "475px" },
      "xsm-mx": { max: "349px" },
    },
    extend: {
      colors: {
        "primary-bg": "#D51243",
        "primary-text": "#b50c37",
        "primary-bg-dark": "#030817",
        "secondary-bg-dark": "#15162F",
        "primary-bg-light": "#f9fbfd",
        "secondary-bg-light": "#e4eafc",
      },
      boxShadow: {
        "card-shadow-dark": "rgb(21, 22, 47) 0px 1px 0px 1px, rgb(21, 22, 47) 0px 1px 0px 1px",
        "card-shadow-light": "rgba(17, 17, 26, 0.05) 0px 1px 0px 1px, rgba(17, 17, 26, 0.1) 0px 1px 0px 1px",
        "box-shadow": "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
