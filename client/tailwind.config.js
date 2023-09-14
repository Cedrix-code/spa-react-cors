/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
    colors: {
      primary: "#0e181b",
      secondary: "#9aa9b4",
      tertiary: "#212d36",
      accent: "#E88C1F",
    },
    gradientColorStops: {
      'green': '#00FF00',
      'orange': '#FFA500',
    },
    screens: {  
      xs: "480px",
    },
  },
},

  plugins: [],
}

