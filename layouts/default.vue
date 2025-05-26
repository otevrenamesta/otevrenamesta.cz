<template>
  <div class="overflow-x-hidden">
    <Header />

    <BurgerDialog />

    <div class="pt-10">
      <slot />
    </div>

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
