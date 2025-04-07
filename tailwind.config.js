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
        //Light-mode
        "light-primary-bg": "#f9fbfd",
        "light-secondary-bg": "#ffffff",
        "light-muted-bg": "#f7f7fd", //"#e4eafc",
        "light-primary-text": "#020617", //"rgb(16, 17, 30)",
        "light-secondary-text": "#334155",
        "light-border": "#f7f7f7",

        //Dark-mode
        "dark-primary-bg": "#04040C", //"#050505",
        "dark-secondary-bg": "#090a10", //"#09090a",
        "dark-muted-bg": "#101017", //"#111111", //"#0e1114",
        "dark-primary-txt": "#fdfeff",
        "dark-secondary-txt": "#b7bbc4",
        "dark-border": "#0b0e10",

        // sidebar: {
        //   DEFAULT: "hsl(var(--sidebar-background))",
        //   foreground: "hsl(var(--sidebar-foreground))",
        //   primary: "hsl(var(--sidebar-primary))",
        //   "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        //   accent: "hsl(var(--sidebar-accent))",
        //   "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        //   border: "hsl(var(--sidebar-border))",
        //   ring: "hsl(var(--sidebar-ring))",
        // },
      },
      boxShadow: {
        "card-shadow": "0 1px 4px #8080801c",
        "box-shadow-light": "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        "box-shadow-dark": "#101017 0px 2px 0px, #101017 0px 2px 8px",
      },
      backgroundImage: {
        "main-bg-dark": "linear-gradient(135deg, #0f1b1d 0%, #162528 50%, #1e363b 100%)",
        "main-bg-light": "linear-gradient(to right bottom, #E0F2FE 0%, #D5EAF6 30%, #F6F6F6 70%, #EAEAEA 100%)",
        "button-gradient": "linear-gradient(90deg, rgb(250,65,75) 0%, rgb(252,91,111) 49%, rgb(253,124,80) 100%)",
        "button-gradient-hover": "linear-gradient(270deg, rgb(250,65,75) 0%, rgb(252,91,111) 49%, rgb(253,124,80) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
