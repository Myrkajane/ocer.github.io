/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmMono: ['DM Mono', 'monospace'],
        sora: ['Sora', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
