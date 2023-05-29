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
    };
  },

  actions: {
    async loadGlobal() {
      if (!process.client) {
        this.global = await queryContent(`${useI18n().locale.value}/global`).findOne();
        return this.global;
      }
    },
    async load({ page }) {
      if (!process.client) {
        this[page] = await queryContent(`${useI18n().locale.value}/${page}`).findOne();
        return this[page];
      }
    },
  },
});
