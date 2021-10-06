module.exports = {
  mode: 'jit',
  purge: [],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['acumin-pro-wide', 'sans-serif'],
    },
    extend: {
      screens: {
        'hover-none': { raw: '(hover: none)' },
        xs: { max: '350px' },
      },
      colors: {
        primary: '#1E1796',
        'primary-light': '#D4E2FF',
        'primary-dark': '#0F0787',
        secondary: '#00D48F',
        additional: '#FFCC00',
      },
      spacing: {
        'block-0.5': '1.875rem',
        'block-1': '3.75rem',
        'block-1.5': '5.625rem',
        'block-2': '7.5rem',
        'block-3': '11.25rem',
        'block-4': '15rem',
        'block-5': '18.75rem',
        'block-6': '22.5rem',
        'block-7': '26.25rem',
        'block-8': '30rem',
        'block-10': '37.5rem',
        'block-12': '45rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
