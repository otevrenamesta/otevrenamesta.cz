<template>
  <section class="pb-block-2">
    <h3 class="uppercase text-primary text-lg font-bold mb-block-0.5">
      O projektu
    </h3>
    <div
      class="text-xl prose"
      v-html="$md.render(project.content.replaceAll('<br>', '\n'))"
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
