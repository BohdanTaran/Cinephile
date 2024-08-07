export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cp-1': '#ffb17a',
        'cp-2': '#2d3250',
        'cp-3': '#424769',
        'cp-4': '#676F8D',
        'cp-5': '#ffffff',
      },
      screens: {
        xs: '320px',
      },
      fontFamily: {
        fira: ['"Fira Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
