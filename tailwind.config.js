import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      xsm: "360px",
      xs: "476px",
      sm: "640px",
      md: "768px",
      bs: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1550px",
      "2xl-mx": {
        max: "1535px",
      },
      "xl-mx": {
        max: "1279px",
      },
      "lg-mx": {
        max: "1023px",
      },
      "bs-mx": {
        max: "899px",
      },
      "md-mx": {
        max: "767px",
      },
      "sm-mx": {
        max: "639px",
      },
      "xs-mx": {
        max: "475px",
      },
      "xsm-mx": {
        max: "359px",
      },
    },
    fontFamily: {
      sora: ["Sora", "serif"],
      Aclonica: ["Aclonica", "sans-serif"],
      Exo: ["Exo", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#fa414c",
        "light-primary-bg": "#f9fbfd",
        "light-secondary-bg": "#ffffff",
        "light-muted-bg": "#eceef7",
        "light-primary-text": "#020617",
        "light-secondary-text": "#334155",
        "light-card-border": "#f4f4f6",
        "light-border": "#edf0f9",
        "dark-primary-bg": "#000410",
        "dark-secondary-bg": "#090b15",
        "dark-muted-bg": "#121624",
        "dark-primary-txt": "#fdfeff",
        "dark-secondary-txt": "#b7bbc4",
        "dark-border": "#0d101e",
        "dark-muted-border": "#0a0b17",
      },
      boxShadow: {
        "card-shadow": "inset 2px 2px 18px #2563eb1a",
        "box-shadow-light": "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 5px",
        "box-shadow-dark": "#121624 0px 1px 0px, #121624 0px 0px 5px",
        "dashboard-page-shadow-light": "rgba(17, 17, 26, 0.05) 0px 2px 2px 0px, rgba(17, 17, 26, 0.05) 0px 2px 2px 0px",
        "dashboard-page-shadow-dark": "#101017 0px 2px 2px 0px, #101017 0px 2px 2px 0px",
      },
      backgroundImage: {
        "main-bg-dark": "linear-gradient(135deg, #0f1b1d 0%, #162528 50%, #1e363b 100%)",
        "main-bg-light": "linear-gradient(to right bottom, #E0F2FE 0%, #D5EAF6 30%, #F6F6F6 70%, #EAEAEA 100%)",
        "text-gradient": "linear-gradient(to right, rgb(250,65,75) 0%, rgb(252,91,111) 49%, rgb(253,124,80) 100%)",
        "button-gradient": "linear-gradient(90deg, rgb(250,65,75) 0%, rgb(252,91,111) 49%, rgb(253,124,80) 100%)",
        "button-gradient-hover": "linear-gradient(270deg, rgb(250,65,75) 0%, rgb(252,91,111) 49%, rgb(253,124,80) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),

    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          backgroundImage: "linear-gradient(to right, rgb(250,65,75) 0%, rgb(252,91,111) 49%, rgb(253,124,80) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      });
    }),
  ],
};
