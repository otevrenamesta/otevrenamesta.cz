export const state = () => ({
  global: {},
  homepage: null,
  about: null,
});

export const mutations = {
  setGlobal(state, payload) {
    state.global = payload;
  },
  set(state, { page, payload }) {
    state[page] = payload;
  },
};

export const actions = {
  async loadGlobal({ commit }) {
    const response = await this.$content(`${this.$i18n.locale}/global`).fetch();

    commit('setGlobal', response);
  },

  async load({ commit }, { page }) {
    const payload = await this.$content(`${this.$i18n.locale}/${page}`).fetch();

    commit('set', {
      page,
      payload,
    });
  },

};
