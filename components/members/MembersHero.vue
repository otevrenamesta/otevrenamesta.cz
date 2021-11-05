<template>
  <section class="flex items-end relative pt-block-3 w-full">
    <div class="container relative flex flex-col justify-start items-start">
      <div class="absolute z-10 top-block-2 left-block-4">
        <strong class="block text-secondary uppercase font-bold text-base leading-none mb-block-1.5 -mt-0.5">
          {{ hero.title }}
        </strong>
        <h2
          v-preposition-space
          class="text-primary text-5xl leading-tight font-bold tracking-tighter w-2/3 mb-block-1"
          v-html="hero.description"
        />
        <nuxt-link
          :to="localePath('/collaboration')"
        >
          <Button icon="icon-arrow-open">
            {{ hero.cta }}
          </Button>
        </nuxt-link>
      </div>
      <div class="flex flex-col justify-start items-start relative w-auto">
        <div
          class="w-block-2 h-block-2 absolute top-0 left-0 flex flex-wrap"
        >
          <div class="w-1/2 h-1/2 bg-primary" />
          <div class="w-1/2 h-1/2 bg-primary" />
          <div class="w-1/2 h-1/2 bg-transparent" />
          <div class="w-1/2 h-1/2 bg-primary" />
        </div>
        <div
          class="w-block-4 h-block-4 bg-secondary absolute top-0 -right-block-2 rounded-br-full"
        />
        <div
          class="w-block-4 h-block-4 bg-additional absolute -left-block-2 bottom-0 rounded-full"
        />
        <div
          class="w-block-2 h-block-2 bg-primary absolute bottom-block-4 right-0"
        />
        <Grid
          :rows="7"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    hero() {
      return this.$store.state.content.members.hero;
    },
  },
};
</script>
