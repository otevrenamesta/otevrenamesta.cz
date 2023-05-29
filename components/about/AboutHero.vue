<template>
  <section class="flex items-end relative pt-block-3 overflow-x-hidden w-full">
    <div class="container relative flex flex-col justify-start items-start">
      <div class="absolute z-10 top-0 h-full flex flex-col justify-center left-block-1.5 md:left-block-4 xs:left-block-0.5">
        <strong class="block text-secondary uppercase font-bold text-base leading-none mb-block-0.75 sm:mb-block-1.5 -mt-0.5">
          {{ hero.title }}
        </strong>
        <h2
          v-preposition-space
          class="text-primary text-2xl md:text-5xl md:leading-tight font-bold tracking-tighter w-9/12"
        >
          {{ hero.description }}
        </h2>
      </div>
      <div class="flex flex-col justify-start items-start relative w-auto">
        <div
          class="w-block-1.5 sm:w-block-2 h-block-1.5 sm:h-block-2 absolute top-0 sm:top-block-2 left-0 flex flex-wrap"
        >
          <div class="w-1/2 h-1/2 bg-primary" />
          <div class="w-1/2 h-1/2 bg-primary" />
          <div class="w-1/2 h-1/2 bg-transparent" />
          <div class="w-1/2 h-1/2 bg-primary" />
        </div>
        <div
          class="w-block-1.5 sm:w-block-4 h-block-1.5 sm:h-block-4 bg-secondary absolute bottom-0 left-0 sm:-left-block-2 rounded-br-full"
        />
        <div
          class="w-block-1.5 sm:w-block-4 h-block-1.5 sm:h-block-4 bg-additional absolute top-0 sm:top-block-2 right-0 sm:-right-block-2 rounded-full"
        />
        <div
          class="w-block-2 h-block-2 bg-primary absolute bottom-block-2 right-block-2 hidden lg:block"
        />
        <Grid
          :rows="($grid.height > 800 || !$grid.sm) ? 7 : 6"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    hero() {
      return useContentStore().about.hero;
    },
  },
};
</script>
