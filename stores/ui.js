export const useUiStore = defineStore('ui', {
  state: () => {
    return {
      isBurgerDialogOpen: false,
    };
  },

  actions: {
    toggleBurgerDialogOpen() {
      this.isBurgerDialogOpen = !this.isBurgerDialogOpen;
    },
    setBurgerDialogOpen(payload) {
      this.isBurgerDialogOpen = payload;
    },
  },
});
