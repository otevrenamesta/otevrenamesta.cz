<template>
  <section
    v-show="images?.length"
    class="p-8"
  >
    <h3 class="uppercase text-primary text-lg font-bold mb-block-0.5">
      Galerie
    </h3>
    <div>
      <vue-easy-lightbox
        :visible="currentImageIndex !== null"
        :imgs="images"
        zoom-disabled
        rotate-disabled
        pinch-disabled
        move-disabled
        loop
        :index="currentImageIndex"
        @hide="currentImageIndex = null"
      >
        <template #toolbar />
      </vue-easy-lightbox>

      <div class="flex flex-wrap -mx-2">
        <button
          v-for="(image, index) in images.slice(0, 4)"
          :key="index"
          class="w-1/2 px-2 mb-2"
          @click="currentImageIndex = index"
        >
          <img
            :src="image"
            :alt="props.project.title"
            loading="lazy"
            class="w-full"
          >
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import VueEasyLightbox from 'vue-easy-lightbox';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const currentImageIndex = ref(null);
const images = ref([]);

onMounted(() => {
  images.value = props.project.obrazky
    ? props.project.obrazky.map((image) => {
      return `https://api.www.otevrenamesta.cz/assets/${image.file_id}`;
    })
    : [];
});
</script>

<style>
.vel-img {
  box-shadow: none;
}

.vel-modal {
  background-color: rgba(30, 30, 30, 0.9);
}
</style>
