module.exports = {
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'stores/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
  ],
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
        // 'block-0.5': '1.875rem',
        // 'block-0.75': '2.8125rem',
        // 'block-1': '3.75rem',
        // 'block-1.5': '5.625rem',
        // 'block-2': '7.5rem',
        // 'block-3': '11.25rem',
        // 'block-4': '15rem',
        // 'block-4.5': '16.875rem',
        // 'block-5': '18.75rem',
        // 'block-6': '22.5rem',
        // 'block-7': '26.25rem',
        // 'block-8': '30rem',
        // 'block-10': '37.5rem',
        // 'block-12': '45rem',

        'block-0.5': 'calc(var(--block-size) * 0.5)',
        'block-0.75': 'calc(var(--block-size) * 0.75)',
        'block-1': 'var(--block-size)',
        'block-1.5': 'calc(var(--block-size) * 1.5)',
        'block-2': 'calc(var(--block-size) * 2)',
        'block-3': 'calc(var(--block-size) * 3)',
        'block-4': 'calc(var(--block-size) * 4)',
        'block-4.5': 'calc(var(--block-size) * 4.5)',
        'block-5': 'calc(var(--block-size) * 5)',
        'block-6': 'calc(var(--block-size) * 6)',
        'block-7': 'calc(var(--block-size) * 7)',
        'block-8': 'calc(var(--block-size) * 8)',
        'block-10': 'calc(var(--block-size) * 10)',
        'block-12': 'calc(var(--block-size) * 12)',
      },

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.secondary'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
