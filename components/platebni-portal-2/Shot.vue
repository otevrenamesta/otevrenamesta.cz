<template>
  <figure class="shot">
    <button
      type="button"
      :aria-label="zoomLabel"
      @click="zoom({ src, alt })"
    >
      <span
        v-if="url"
        class="bar"
      >
        <span class="dots"><i /><i /><i /></span>
        <span class="url">{{ url }}</span>
      </span>
      <img
        :src="src"
        :alt="alt"
        :width="width"
        :height="height"
        :loading="eager ? 'eager' : 'lazy'"
      >
    </button>
    <figcaption v-if="caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  width: { type: [Number, String], default: undefined },
  height: { type: [Number, String], default: undefined },
  url: { type: String, default: '' },
  caption: { type: String, default: '' },
  zoomLabel: { type: String, default: 'Zvětšit náhled' },
  eager: { type: Boolean, default: false },
});

const zoom = inject('pp2Zoom', () => {});
</script>
