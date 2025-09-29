<template>
  <section class="p-8">
    <div
      v-if="project.logo"
      class="mb-block-1"
      v-html="project.logo"
    />

    <h3 class="text-xl prose mb-12">
      O projektu
    </h3>

    <div
      class="text-primary font-semibold text-3xl"
      v-html="project.perex"
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
