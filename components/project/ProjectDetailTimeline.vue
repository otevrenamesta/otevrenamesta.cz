<template>
  <section class="pt-block-1 pb-block-1">
    <h3 class="uppercase text-primary text-lg font-bold mb-block-0.5">
      Časová osa
    </h3>
    <div class="flex flex-wrap">
      <ProjectDetailTimelineItem
        v-for="(item, index) in project.milestones"
        :key="index"
        :item="item"
        class="w-1/2 sm:w-1/4 xs:w-full mb-block-0.5"
        :is-last="index === project.milestones.length - 1"
      />
    </div>
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
