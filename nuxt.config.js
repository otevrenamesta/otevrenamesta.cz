export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'otevrenamesta',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/global.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources', // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/eslint
    '@nuxtjs/tailwindcss', // https://go.nuxtjs.dev/tailwindcss
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
    '@nuxtjs/pwa', // https://go.nuxtjs.dev/pwa
    '@nuxt/content', // https://go.nuxtjs.dev/content
    '@nuxtjs/svg',
    'vue-screen/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

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

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
