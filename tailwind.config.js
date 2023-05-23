/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        comforta: ["Comfortaa"],
        poppins: ["Poppins"],
      },
      fontWeight: {
        "weight-300": "300",
        "weight-400": "400",
        "weight-700": "700",
      },
    },
  },
  plugins: [],
}

