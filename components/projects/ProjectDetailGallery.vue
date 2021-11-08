<template>
  <section class="pt-block-1 pb-block-1">
    <h3 class="uppercase text-primary text-lg font-bold mb-block-0.5">
      Galerie
    </h3>
    <div>
      <div
        v-for="(image, index) in images"
        :key="index"
        class="mb-6 last:mb-0"
      >
        img
        <!-- <a
          v-if="partner.link"
          :href="partner.link"
          target="_blank"
        >
          <img
            :src="partner.image"
            :alt="partner.link"
            class="max-w-full"
          >
        </a> -->
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

  data() {
    return {
      images: [],
    };
  },

  async mounted() {
    const filter = { tags: { like: `%project${this.project.id}%` } };
    const images = await this.$axios.$get('/mediaman/', {
      params: {
        fitler: JSON.stringify(filter),
      },
    });
    console.log(images);
  },
};
</script>
