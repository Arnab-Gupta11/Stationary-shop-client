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
      Play: ["Play", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-bg": "#fa414c",
        "primary-text": "#fa414c",
        "primary-bg-light": "#f9fbfd",
        "secondary-bg-light": "#e4eafc",
        "primary-text-light": "rgb(16, 17, 30)",
        "secondary-text-light": "rgb(116, 118, 145)",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      boxShadow: {
        "card-shadow-dark": "rgb(21, 22, 47) 0px 1px 0px 1px, rgb(21, 22, 47) 0px 1px 0px 1px",
        "card-shadow-light": "rgba(17, 17, 26, 0.05) 0px 1px 0px 1px, rgba(17, 17, 26, 0.1) 0px 1px 0px 1px",
        "box-shadow": "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
      },
      backgroundImage: {
        "main-bg": "radial-gradient(circle at 60% 80%, #19192d, #2d1929, #332C56 130%)",
        "main-bg-light": "radial-gradient(circle at 50% 10%,#d8bbeb,#c8bfef,#edd2e7 120%)",
        "smooth-dark": "linear-gradient(135deg, #0f1b1d 0%, #162528 50%, #1e363b 100%)",
        "smooth-light": "linear-gradient(to right bottom, #E0F2FE 0%, #D5EAF6 30%, #F6F6F6 70%, #EAEAEA 100%)",
        "button-gradient": "linear-gradient(90deg, rgb(250,65,75) 0%, rgb(252,91,111) 49%, rgb(253,124,80) 100%)",
        "button-gradient-hover": "linear-gradient(270deg, rgb(250,65,75) 0%, rgb(252,91,111) 49%, rgb(253,124,80) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
