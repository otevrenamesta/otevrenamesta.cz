<template>
  <div>
    <Header />

    <nuxt />

    <Footer />
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('content/loadGlobal');
  },
};
</script>
