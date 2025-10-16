<template>
  <section class="p-8 pb-block-2">
    <div
      class="text-xl prose"
      v-html="$md.render((project.content || '').replaceAll('<br>', '\n'))"
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
