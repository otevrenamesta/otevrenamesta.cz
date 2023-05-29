<template>
  <div class="overflow-x-hidden">
    <Header />

    <BurgerDialog />

    <slot />

    <Footer />
  </div>
</template>

<script setup>
// export default {
//   async fetch() {
//     await this.$store.dispatch('content/loadGlobal');
//   },

//   watch: {
//     $route: {
//       immediate: true,
//       handler() {
//         useUiStore().setBurgerDialogOpen(false)
//       },
//     },
//   },
// };
</script>
