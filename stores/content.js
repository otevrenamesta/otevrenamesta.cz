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
      this.global = await queryContent(`${useI18n().locale.value}/global`).findOne();
    },
    async load({ page }) {
      this[page] = await queryContent(`${useI18n().locale.value}/${page}`).findOne();
    }
  },
});
