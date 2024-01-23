/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-card": "#0E0F0F",
        "background-main": "#1E2122",
        "background-mainBody": "#121212",
        "background-mini-card": "#242424",
        "play-button": "#1FDF64",
        "first-color-gradient": "#AE2996",
        "last-color-gradient": "#519BF5",
        "network-background": "#727272",
      },
      maxHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
};
