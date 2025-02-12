import svgLoader from 'vite-svg-loader';
import tailwindcss from '@tailwindcss/vite';
import { defineNuxtConfig } from 'nuxt/config';

const title = 'Otevřená města';
const description = 'Partner pro digitalizaci samospráv. Specializujeme se na technickou, právní a metodickou podporu v oblasti digitalizace samospráv.';
const baseURL = 'https://api.www.otevrenamesta.cz';

export default defineNuxtConfig({
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-lodash',
    '@nuxt/scripts',
  ],

  $production: {
    scripts: {
      registry: {
        googleTagManager: {
          id: 'G-MQKKD0BK74',
        },
      },
    },
  },

  imports: {
    dirs: ['./stores'],
  },

  app: {
    head: {
      title,
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/sxc7jmb.css' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      script: [
        {
          body: true,
          innerHTML: `var $buoop = { required:{e:-4,f:-6,o:-6,s:-3,c:-9},insecure:true,api:2020.11 };
            function $buo_f(){
            var e = document.createElement("script");
            e.src = "//browser-update.org/update.min.js";
            e.async = "true";
            document.body.appendChild(e);
            };
            try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
            catch(e){window.attachEvent("onload", $buo_f)}`,
        },
        {
          body: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-MQKKD0BK74',
        },
        {
          body: true,
          innerHTML: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MQKKD0BK74');`,
        },
      ],
    },
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/global.css',
  ],

  runtimeConfig: {
    public: {
      title,
      description,
      baseApiUrl: baseURL,
    },
  },

  compatibilityDate: '2025-02-12',

  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //   },
  // },

  vite: {
    plugins: [
      tailwindcss(),
      svgLoader({
        svgo: false,
      }),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    locales: [
      {
        code: 'cs',
      },
      {
        code: 'en',
      },
    ],
    defaultLocale: 'cs',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root',
    // },
  },

  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/davidvesely',
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

  lodash: {
    prefix: '_',
    upperAfterPrefix: false,
    exclude: ['isNaN', 'isMap'],
  },
});
