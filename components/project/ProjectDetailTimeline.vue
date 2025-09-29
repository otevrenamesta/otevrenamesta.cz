<template>
  <section class="p-8">
    <h3 class="uppercase text-primary text-lg font-bold mb-block-0.5">
      Časová osa
    </h3>
    <div>
      <ProjectDetailTimelineItem
        v-for="(item, index) in project.milestones"
        :key="index"
        :item="item"
        class="mb-5"
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
