<template>
  <div class="pt-block-2 pb-block-3">
    <strong class="block text-secondary uppercase font-bold text-base leading-snug mb-block-1 max-w-sm">
      {{ action?.title }}
    </strong>

    <div
      v-for="step in action?.steps"
      :key="step.number"
      class="mb-block-1 max-w-sm"
    >
      <strong class="block text-secondary uppercase font-bold text-base leading-snug mb-2.5">
        {{ step.number }}
      </strong>
      <div
        class="text-primary [&_a]:underline text-base"
        v-html="step.description"
      />
    </div>

    <div class="mt-block-2">
      <strong class="block text-secondary uppercase font-bold text-base leading-snug mb-block-1 max-w-sm">
        {{ action?.network?.title }}
      </strong>

      <div class="flex flex-col gap-8">
        <a
          v-for="partner in action?.network?.items"
          :key="partner.url"
          :href="partner.url"
        >
          <img
            :src="partner.logo"
            :alt="partner.title"
            class="w-40 h-auto object-contain"
          >
        </a>
      </div>
    </div>

    <div class="mt-block-2">
      <strong class="block text-secondary uppercase font-bold text-base leading-snug mb-block-1 max-w-sm">
        {{ action?.partners?.title }}
      </strong>

      <div class="flex flex-col gap-8">
        <a
          v-for="partner in action?.partners?.items"
          :key="partner.url"
          :href="partner.url"
        >
          <img
            :src="partner.logo"
            :alt="partner.title"
            class="w-auto h-20 object-contain"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    action() {
      return useContentStore().czechOspo.action;
    },
  },
};
</script>
