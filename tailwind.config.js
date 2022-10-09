/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e53d54",

          "secondary": "#d65920",

          "accent": "#9b8cf7",

          "neutral": "#1F202E",

          "base-100": "#FFFFFF",

          "info": "#3EAAE5",

          "success": "#14B38E",

          "warning": "#FCB954",

          "error": "#E61935",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
} 