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
        xs:{ max: '350px' },
      },
      // colors: {
      //   'primary': 'var(--color-primary)',
      // },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
};
