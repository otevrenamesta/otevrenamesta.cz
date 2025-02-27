<template>
  <div>
    <section class="flex items-end relative pt-block-3 overflow-x-hidden w-full">
      <div class="container relative flex flex-col justify-start items-start">
        <div class="absolute z-10 top-0 h-full flex flex-col pt-block-2 xs:left-block-0.5 left-block-1.5 md:left-block-4">
          <strong class="block text-secondary uppercase font-bold text-base leading-none h-block-1 md:h-block-2 -mt-0.5">
            {{ hero.title }}
          </strong>
          <h2
            v-preposition-space
            class="text-primary text-2xl md:text-5xl md:leading-tight font-bold tracking-tighter h-block-2"
            v-html="hero.description"
          />
          <div
            class="text-primary w-11/12 lg:w-7/12 text-xl font-semibold"
            v-html="hero.content"
          />
        </div>
        <div class="flex flex-col justify-start items-start relative w-auto">
          <div
            class="w-block-2 sm:w-block-2 h-block-2 sm:h-block-2  absolute top-0 left-0 flex flex-wrap"
          >
            <div class="w-1/2 h-1/2 bg-primary" />
            <div class="w-1/2 h-1/2 bg-primary" />
            <div class="w-1/2 h-1/2 bg-transparent" />
            <div class="w-1/2 h-1/2 bg-primary" />
          </div>
          <div
            class="w-block-2 sm:w-block-4 h-block-2 sm:h-block-4 bg-secondary absolute top-0 right-0 sm:-right-block-2 rounded-br-full"
          />
          <div
            class="w-block-2 sm:w-block-4 h-block-2 sm:h-block-4 bg-additional absolute left-0 sm:-left-block-2 bottom-0 rounded-full"
          />
          <div
            class="w-block-2 h-block-2 bg-primary absolute bottom-block-2 right-0 hidden lg:block"
          />
          <Grid
            :rows="$grid?.sm ? 6 : 10"
          />
        </div>
      </div>
    </section>
    <div class="block md:hidden mt-10 px-6">
      <img
        src="~/assets/img/declaration-hero-logos.png"
        alt="Logo"
        class="max-w-full"
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hero() {
      return useContentStore().czechOspo.hero;
    },
  },
};
</script>
