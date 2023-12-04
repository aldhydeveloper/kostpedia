import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azure: {
          "50": "#f1f7fd",
          "100": "#e0eef9",
          "200": "#c7e2f6",
          "300": "#a1d0ef",
          "400": "#74b5e6",
          "500": "#5399de",
          "600": "#3f7fd1",
          "700": "#356ac0",
          "800": "#345da7",
          "900": "#2c4b7c",
          "950": "#1f2e4c",
        },
        "steel-blue": {
          "50": "#f3f7fc",
          "100": "#e5eef9",
          "200": "#c6dcf1",
          "300": "#93c0e6",
          "400": "#5aa0d6",
          "500": "#3b8bca",
          "600": "#2568a4",
          "700": "#1f5485",
          "800": "#1d476f",
          "900": "#1d3d5d",
          "950": "#13273e",
        },
        shakespeare: {
          "50": "#f2f9fd",
          "100": "#e4f1fa",
          "200": "#c3e4f4",
          "300": "#8dcfec",
          "400": "#4bb4de",
          "500": "#2a9ecd",
          "600": "#1c7fad",
          "700": "#18668c",
          "800": "#175675",
          "900": "#194961",
          "950": "#102e41",
        },
        almond: {
          "50": "#fbf6f1",
          "100": "#f5eadf",
          "200": "#efdbcb",
          "300": "#deb293",
          "400": "#cf8d68",
          "500": "#c5714a",
          "600": "#b75d3f",
          "700": "#984936",
          "800": "#7b3d31",
          "900": "#64342a",
          "950": "#351915",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
