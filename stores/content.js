export const useContentStore = defineStore('content', {
  state: () => {
    return {
      global: {},
      homepage: null,
      about: null,
      collaboration: null,
      members: null,
      contact: null,
      project: null,
      declaration: null,
      events: null,
      czechOspo: null,
    };
  },

  actions: {
    async loadGlobal() {
      if (useNuxtApp().ssrContext) {
        const { meta } = await queryCollection(useI18n().locale.value).where('stem', '=', `${useI18n().locale.value}/global`).first();
        this.global = meta;
        return this.global.meta;
      }
    },
    async load({ page }) {
      if (useNuxtApp().ssrContext) {
        const { meta } = await queryCollection(useI18n().locale.value).where('stem', '=', `${useI18n().locale.value}/${page}`).first();
        this[page] = meta;
        return this[page];
      }
    },
  },
});
