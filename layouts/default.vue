<template>
  <div class="overflow-x-hidden">
    <Header />

    <BurgerDialog />

    <slot />

    <Footer />
  </div>
</template>

<script setup>
const route = useRoute();

watch(
  () => route.path,
  () => {
    useUiStore().setBurgerDialogOpen(false);
  },
  { immediate: true },
);
</script>
