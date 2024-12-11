/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        silver: '#e2e2e2',
        bug: 'hsl(80, 61%, 47%)',
        dark: '	hsl(261, 9%, 36%)',
        dragon: 'hsl(208, 89%, 40%)',
        electric: 'hsl(49, 89%, 60%)',
        fairy: 'hsl(304, 71%, 74%)',
        fighting: 'hsl(342, 59%, 53%)',
        fire: 'hsl(25, 100%, 67%)',
        flying: 'hsl(218, 62%, 71%)',
        ghost: 'hsl(225, 36%, 50%)',
        grass: 'hsl(114, 42%, 55%)',
        ground: 'hsl(21, 66%, 56%)',
        ice: 'hsl(171, 48%, 63%)',
        normal: 'hsl(208, 8%, 60%)',
        poison: 'hsl(285, 51%, 61%)',
        psychic: 'hsl(356, 93%, 71%)',
        rock: 'hsl(45, 33%, 66%)',
        steel: 'hsl(197, 29%, 49%)',
        water: 'hsl(211, 62%, 58%)',
      },
      fontFamily: {
        anonymous: ['Anonymous Pro', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
      },
      boxShadow: {
        'list-item': '0px 4px 4px 0px rgba(0, 0, 0, 25%);',
      },
      animation: {
        show: '600ms 100ms cubic-bezier(0.38, 0.97, 0.56, 0.76) forwards',
      },
      keyframes: {
        show: {
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
