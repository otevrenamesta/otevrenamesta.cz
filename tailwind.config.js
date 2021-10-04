module.exports = {
  mode: 'jit',
  purge: [],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      screens: {
        'hover-none': { raw: '(hover: none)' },
        xs: { max: '350px' },
      },
      colors: {
        primary: '#1E1796',
        secondary: '#00D48F',
        additional: '#FFCC00',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
