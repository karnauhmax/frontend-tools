/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sidebar-layout': '300px 1fr',
        'preview-layout': 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        'performance-metrics-layout':
          'repeat(auto-fill, minmax(min(220px, 100%), 1fr))',
        'performance-items-layout': '1fr 20px',
      },
      transitionProperty: {
        'grid-rows': 'grid-template-rows',
      },
      colors: {
        primary: 'var(--primary-color)',
        dark: 'var(--dark-color)',
        'text-secondary': 'rgba(235, 235, 235, .6)',
        'text-primary': 'rgba(255, 255, 255, .87)',
        'score-high': '#42b883',
        'score-mid': 'orange',
        'score-low': 'rgb(239 68 68 / 1)',
      },
      screens: {
        'hover-hover': { raw: '(hover: hover)' },
      },
      transitionDuration: {
        400: '400ms',
      },
      fontFamily: {
        main: ['DM Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
