const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    scale: {
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    extend: {
      colors: {
        'cool-gray': colors.coolGray,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      divideColor: ['group-hover'],
      hueRotate: ['hover', 'focus'],
      padding: ['hover'],
      scale: ['active', 'group-hover'],
      transform: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
