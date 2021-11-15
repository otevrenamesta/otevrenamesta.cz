export const state = () => ({
  isBurgerMenuOpen: false,
});

export const mutations = {
  setIsBurgerMenuOpen(state, payload) {
    state.isBurgerMenuOpen = payload;
  },
};
