<template>
  <div class="overflow-x-hidden">
    <Header />

    <BurgerDialog />

    <nuxt />

    <Footer />
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('content/loadGlobal');
  },

  watch: {
    $route: {
      immediate: true,
      handler() {
        this.$store.commit('ui/setIsBurgerMenuOpen', false);
      },
    },
  },
};
</script>
