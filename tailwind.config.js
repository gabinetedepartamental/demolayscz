/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          hover: '#E5C158',
          dark: '#B38F17',
        },
        demolay: {
          // Rich Dark Emerald Green
          green: {
            DEFAULT: '#053E26', // Default maps to Rich Dark Emerald Green
            50: '#f2f8f5',
            100: '#e1ede7',
            200: '#c5dbcf',
            300: '#9dbfae',
            400: '#6f9d85',
            500: '#4c7f66',
            600: '#38634e',
            700: '#2d513f',
            800: '#0F5257',
            900: '#053E26',
            950: '#022415',
          },
          // Polished Metallic Gold
          gold: {
            DEFAULT: '#D4AF37', // Default maps to Polished Metallic Gold
            50: '#fbf9f1',
            100: '#f4eecc',
            200: '#e9db98',
            300: '#dbbf59',
            400: '#cfab35',
            500: '#c29a28',
            600: '#a37b1f',
            700: '#D4AF37',
            800: '#755819',
            900: '#483510',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


