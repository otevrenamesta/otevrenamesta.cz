<template>
  <section
    v-if="project.funkce"
    class="pt-block-1 pb-block-1"
  >
    <h3 class="uppercase text-primary text-lg font-bold mb-block-0.5">
      Funkce software
    </h3>
    <div
      v-preposition-space
      v-html="project.funkce"
    />
  </section>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
