import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    cs: defineCollection({
      type: 'data',
      source: 'cs/**',
    }),
    en: defineCollection({
      type: 'data',
      source: 'en/**',
    }),
  },
});
