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
    screens: {
      s: '440px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
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
        'secondary-dark': '#00563C',
        additional: '#FFCC00',
        light: '#6E88FF',
        gray: '#525252',
        dark: '#161616',
      },
      spacing: {
        'block-0.5': '1.875rem',
        'block-0.75': '2.8125rem',
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
