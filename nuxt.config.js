import axios from 'axios';
import svgLoader from 'vite-svg-loader';

const title = 'Otevřená města';
const description = 'Partner pro digitalizaci samospráv. Specializujeme se na technickou, právní a metodickou podporu v oblasti digitalizace samospráv.';
const baseURL = 'https://api.www.otevrenamesta.cz';

export default defineNuxtConfig({
  app: {
    head: {
      title,
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/sxc7jmb.css' },
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      appendTitle: '| Otevřená města', // TODO: remove
      title,
      description,
      baseApiUrl: baseURL,
    },
  },

  css: [
    '~/assets/css/global.css',
  ],

  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    // '@nuxtjs/style-resources',
    // '@nuxtjs/eslint-module',
    // '@nuxtjs/tailwindcss',
    // ['@nuxtjs/moment', { locales: ['cs'], defaultLocale: 'cs' }],

    // '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    '@vueuse/nuxt',
    '@nuxt/content',
    // '@nuxtjs/svg',
    // 'vue-screen/nuxt',
    '@nuxtjs/i18n',
    // '@nuxt/image',
    '@nuxt/image-edge',
    // '@nuxtjs/sitemap',
    // '@nuxtjs/markdownit',
  ],

  i18n: {
    strategy: 'no_prefix',
    // lazy: true,
    // langDir: 'locales/',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'cs',
        iso: 'cs',
        name: 'Česky',
        // icon: 'custom/flag-cz',
        // file: 'cs.json5',
      },
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        // icon: 'custom/flag-en',
        // file: 'en.json5',
      },
    ],
  },

  imports: {
    dirs: ['./stores'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'cs',
    },
  },

  generate: {
    async routes() {
      const projects = await axios.get(`${baseURL}/items/projects?limit=25&fields[]=id&page=1`);
      const news = await axios.get(`${baseURL}/items/posts?fields[]=id&limit=25&page=1`);

      return [
        ...projects.data.data.map(project => `/projects/${project.id}`),
        ...news.data.data.map(item => `/news/${item.id}`),
      ];
    },
  },

  markdownit: {
    runtime: true,
  },

  sitemap: {
    hostname: 'https://otevrenamesta.cz/',
  },

  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/davidvesely',
    },
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  vite: {
    plugins: [
      svgLoader({
        /* ... */
      })
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
});
