/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#DFDED9",
        "main": "#8F9484",
        "dark": "#22211F",
        "motion": "#CBCAC5"
      },
      backgroundColor: {
        'custom-rgba': 'rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
};
