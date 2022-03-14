<template>
  <section
    v-if="project.partneri && project.partneri.length"
    class="pt-block-1 pb-block-1"
  >
    <h3 class="uppercase text-primary text-lg font-bold mb-block-0.5">
      Partneři projektu
    </h3>
    <div>
      <div
        v-for="(partner, index) in project.partneri"
        :key="index"
        class="mb-6 last:mb-0"
      >
        <a
          v-if="partner.link"
          :href="partner.link"
          class="block max-w-[180px]"
          target="_blank"
        >
          <img
            :src="partner.image"
            :alt="partner.link"
            class="max-w-full"
          >
        </a>
      </div>
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
