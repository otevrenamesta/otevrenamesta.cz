<template>
  <section
    v-if="images && images.length"
    class="pt-block-1 pb-block-1"
  >
    <h3 class="uppercase text-primary text-lg font-bold mb-block-0.5">
      Galerie
    </h3>
    <div>
      <CoolLightBox
        :items="images.map(image => image.url)"
        :slideshow="false"
        :gallery="false"
        :index="currentImageIndex"
        @close="currentImageIndex = null"
      />

      <div class="flex flex-wrap -mx-2">
        <button
          v-for="(image, index) in images.slice(0, 4)"
          :key="index"
          class="w-1/2 px-2 mb-2"
          @click="currentImageIndex = index"
        >
          <img
            :src="image.url"
            :alt="project.title"
            loading="lazy"
            class="w-full"
          >
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

export default {
  components: {
    CoolLightBox,
  },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      currentImageIndex: null,
      images: [],
    };
  },

  async mounted() {
    const filter = { tags: { like: `%project${this.project.id}%` } };
    const images = await this.$axios.$get('https://modurad.otevrenamesta.cz/omesta/mediaman/', {
      params: {
        filter: JSON.stringify(filter),
      },
    });
    this.images = images.map((image) => {
      image.url = `https://modurad.otevrenamesta.cz/media/omesta/${image.filename}`;
      return image;
    });
  },
};
</script>
