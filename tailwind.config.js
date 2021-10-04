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
        'primary-light': '#D4E2FF',
        dark: '#0F0787',
        secondary: '#00D48F',
        additional: '#FFCC00',
      },
      spacing: {
        'block-1': '3.75rem',
        'block-2': '7.5rem',
        'block-3': '11,25rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
