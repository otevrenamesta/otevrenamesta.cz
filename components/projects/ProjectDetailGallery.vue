<template>
  <section class="pt-block-1 pb-block-1">
    <h3 class="uppercase text-primary text-lg font-bold mb-block-0.5">
      Galerie
    </h3>
    <div>
      <CoolLightBox
        :items="images"
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
            :src="image"
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
      images: [
        'https://pix10.agoda.net/hotelImages/1199068/-1/09cb9a2780bf41ad1e8f8a3d2e074754.jpg',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg',
      ],
    };
  },

  mounted() {
    this.images = this.project.obrazky
      ? this.project.obrazky.map((image) => {
        return `https://api.www.otevrenamesta.cz/assets/${image.file_id}`;
      })
      : [];
  },
};
</script>
