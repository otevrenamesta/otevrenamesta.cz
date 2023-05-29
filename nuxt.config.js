import svgLoader from 'vite-svg-loader';

const title = 'Otevřená města';
const description = 'Partner pro digitalizaci samospráv. Specializujeme se na technickou, právní a metodickou podporu v oblasti digitalizace samospráv.';
const baseURL = 'https://api.www.otevrenamesta.cz';

export default defineNuxtConfig({
  ssr: true,

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
    // '@nuxtjs/pwa',
    '@vueuse/nuxt',
    '@nuxt/content',
    // 'vue-screen/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    // '@nuxtjs/sitemap',
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

  pwa: {
    manifest: {
      lang: 'cs',
    },
  },

  // generate: {
  //   async routes() {
  //     const projects = await $fetch('/items/projects?limit=25&fields[]=id&page=1', { method: 'GET', baseURL });
  //     const news = await $fetch('/items/posts?fields[]=id&limit=25&page=1', { method: 'GET', baseURL });

  //     return [
  //       ...projects.data.data.map((project) => `/projects/${project.id}`),
  //       ...news.data.data.map((item) => `/news/${item.id}`),
  //     ];
  //   },
  // },

  // hooks: {
  //   async 'nitro:config'(nitroConfig) {
  //     if (nitroConfig.dev) {
  //       return;
  //     }

  //     const projects = await ofetch('/items/projects?limit=25&fields[]=id&page=1', { method: 'GET', baseURL });
  //     nitroConfig.prerender.routes.push(...projects.data.map((project) => `/projects/${project.id}`));

  //     const news = await ofetch('/items/posts?fields[]=id&limit=25&page=1', { method: 'GET', baseURL });
  //     nitroConfig.prerender.routes.push(...news.data.map((item) => `/news/${item.id}`));
  //   },
  // },

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

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  vite: {
    plugins: [
      svgLoader({ }),
    ],
  },
});
