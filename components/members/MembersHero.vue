<template>
  <section class="flex items-end relative pt-block-3 w-full">
    <div class="container relative flex flex-col justify-start items-start">
      <div class="absolute z-10 top-0 h-full flex flex-col justify-center left-block-1.5 md:left-block-4 xs:left-block-0.5">
        <strong class="block text-secondary uppercase font-bold text-base leading-none mb-block-0.75 sm:mb-block-1.5 -mt-0.5">
          {{ hero.title }}
        </strong>
        <h2
          v-preposition-space
          class="text-primary text-2xl lg:text-5xl lg:leading-tight font-bold tracking-tighter w-10/12"
          v-html="hero.description"
        />
        <nuxt-link
          :to="$localePath('/collaboration#form')"
          class="block mt-block-1"
        >
          <Button icon="icon-arrow-open">
            {{ hero.cta }}
          </Button>
        </nuxt-link>
      </div>
      <div class="flex flex-col justify-start items-start relative w-auto">
        <!-- <div
          class="w-block-2 sm:w-block-2 h-block-2 sm:h-block-2  absolute top-0 left-0 flex flex-wrap"
        >
          <div class="w-1/2 h-1/2 bg-primary" />
          <div class="w-1/2 h-1/2 bg-primary" />
          <div class="w-1/2 h-1/2 bg-transparent" />
          <div class="w-1/2 h-1/2 bg-primary" />
        </div> -->
        <div
          class="w-block-2 sm:w-block-4 h-block-2 sm:h-block-4 bg-secondary absolute top-0 right-0 sm:-right-block-2 rounded-br-full"
        />
        <div
          class="w-block-2 sm:w-block-4 h-block-2 sm:h-block-4 bg-additional absolute left-0 sm:-left-block-2 bottom-0 rounded-full hidden sm:block"
        />
        <div
          class="w-block-2 h-block-2 bg-primary absolute bottom-block-4 right-0 hidden lg:block"
        />
        <Grid
          :rows="$grid?.['2xl'] ? 7 : ($grid?.md ? 8 : 10)"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    hero() {
      return useContentStore().members.hero;
    },
  },
};
</script>
