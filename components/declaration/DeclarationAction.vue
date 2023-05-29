<template>
  <div class="pt-block-2 pb-block-3">
    <strong class="block text-secondary uppercase font-bold text-base leading-snug mb-block-1 max-w-sm">
      {{ action.title }}
    </strong>

    <div
      v-for="step in action.steps"
      :key="step.number"
      class="mb-block-1 max-w-sm"
    >
      <strong class="block text-secondary uppercase font-bold text-base leading-snug mb-2.5">
        {{ step.number }}
      </strong>
      <div class="text-primary [&_a]:underline text-base" v-html="step.description" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    action() {
      return useContentStore().declaration.action;
    },
  },
};
</script>
