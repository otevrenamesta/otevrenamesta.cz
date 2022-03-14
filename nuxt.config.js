import axios from 'axios';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  // ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Otevřená města',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/sxc7jmb.css' },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  publicRuntimeConfig: {
    appendTitle: '| Otevřená města',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/global.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/v-preposition-space',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components', pathPrefix: false },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/eslint
    '@nuxtjs/pwa', // https://go.nuxtjs.dev/pwa
    '@nuxtjs/style-resources', // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss', // https://go.nuxtjs.dev/tailwindcss
    ['@nuxtjs/moment', { locales: ['cs'], defaultLocale: 'cs' }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content', // https://go.nuxtjs.dev/content
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
    '@nuxtjs/i18n',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    'vue-screen/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://modurad.otevrenamesta.cz/omesta/uni',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'cs',
    },
  },

  styleResources: {
    scss: [
      './assets/scss/_variables.scss',
    ],
  },

  router: {
    linkActiveClass: 'is-active',
  },

  generate: {
    async routes() {
      const projects = await axios.get('https://modurad.otevrenamesta.cz/omesta/uni/projects/?sort=title:asc&currentPage=1&perPage=100');
      const news = await axios.get('https://modurad.otevrenamesta.cz/omesta/uni/posts/?sort=published:desc');

      return [
        ...projects.data.data.map(project => `/projects/${project.id}`),
        ...news.data.map(item => `/news/${item.id}`),
      ];
    },
  },

  markdownit: {
    runtime: true,
  },

  i18n: {
    // lazy: true,
    // langDir: 'langs/',
    defaultLocale: 'cs',
    vueI18nLoader: true,
    noPrefixDefaultLocale: true,
    locales: [
      {
        code: 'cs',
        iso: 'cs',
        name: 'Česky',
        // file: 'cs.js',
      },
      // {
      //   code: 'en',
      //   iso: 'en',
      //   name: 'English',
      //   // file: 'en.js',
      // },
    ],
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

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
