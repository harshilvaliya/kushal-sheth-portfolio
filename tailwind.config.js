/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rnb-red': '#FF0000',
        'rnb-black': '#000000',
      },
    },
  },
  plugins: [],
};
