<template>
  <section class="container container--md flex flex-col md:flex-row md:items-start">
    <div class="w-full md:w-1/2 border-none md:border-r border-primary-light">
      <div class="w-block-6 mb-block-2 md:mb-0">
        <IconLogoOm
          class="mb-block-1.5"
        />

        <h2
          class="mb-7 text-primary text-4xl font-bold"
          v-html="structure.title"
        />
        <p
          class="text-primary text-base font-medium"
          v-html="structure.description"
        />
      </div>
    </div>
    <div class="w-1/2 flex flex-col items-end border-l border-primary-light border-opacity-50">
      <article
        v-for="(item, index) in structure.items"
        :key="index"
        class="flex mb-block-1 flex-col sm:flex-row last:mb-0"
      >
        <div
          class="mr-block-1 mb-block-0.5 sm:mb-0"
          v-html="item.icon"
        />
        <div>
          <span
            class="inline-flex text-sm font-bold leading-none mb-2.5 w-6 h-6 items-center justify-center"
            :class="[
              item.bg,
              item.bg === 'bg-primary-dark' ? 'text-white text-opacity-90' : 'text-black text-opacity-60',
            ]"
          >
            {{ item.number }}
          </span>
          <h3
            class="text-lg font-bold uppercase mb-2"
            :class="item.color"
          >
            {{ item.title }}
          </h3>
          <p class="text-sm max-w-sm">
            {{ item.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import IconLogoOm from '~/assets/img/icon-logo-om.svg';

export default {
  components: {
    IconLogoOm,
  },
  computed: {
    structure() {
      return useContentStore().about.structure;
    },
  },
};
</script>
