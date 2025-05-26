<template>
  <section class="container pt-block-2">
    <h3 class="uppercase text-primary text-xl font-bold mb-block-1.5">
      {{ timeline?.title }}
    </h3>

    <div class="flex flex-wrap gap-y-5">
      <CzechOspoTimelineItem
        v-for="(item, index) in timeline.items"
        :key="index"
        :item="item"
        class="w-1/2 sm:w-1/3 lg:w-1/6 xs:w-full mb-block-0.5"
        :is-last="index === timeline.items.length - 1"
      />
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    timeline() {
      return useContentStore().czechOspo.timeline;
    },
  },
};
</script>
