<template>
  <section class="pb-block-2">
    <div
      v-for="item in intro?.items"
      :key="item.title"
      class="mb-block-2"
    >
      <h3 class="uppercase text-primary text-lg font-bold mb-block-1">
        {{ item.title }}
      </h3>
      <div
        v-preposition-space
        class="text-base prose mb-block-1"
        v-html="item.content"
      />
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    intro() {
      return useContentStore().czechOspo?.intro;
    },
  },
};
</script>
