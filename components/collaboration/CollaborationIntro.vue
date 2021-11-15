<template>
  <section class="relative">
    <div
      class="w-block-2 h-block-2 absolute bottom-0 left-0 hidden sm:flex flex-wrap"
    >
      <div class="w-1/2 h-1/2 bg-primary" />
      <div class="w-1/2 h-1/2 bg-primary" />
      <div class="w-1/2 h-1/2 bg-transparent" />
      <div class="w-1/2 h-1/2 bg-primary" />
    </div>
    <div
      class="w-block-2 h-block-2 bg-secondary absolute -bottom-block-1 right-0 rounded-br-full xs:hidden"
    />

    <div class="container flex md:items-center flex-col md:flex-row">
      <div class="max-w-xl md:w-1/2 md:max-w-3xl md:pr-10 mb-block-1 md:mb-0">
        <strong class="block text-secondary uppercase font-bold text-base leading-none mb-block-0.5">
          {{ intro.title }}
        </strong>
        <h3
          v-preposition-space
          class="text-primary text-3xl font-semibold leading-snug tracking-tighter"
          v-html="intro.description"
        />
      </div>
      <div class="md:w-1/2 flex flex-col md:items-center">
        <div
          v-for="(offer, index) in intro.offers"
          :key="index"
          class="mb-block-0.5 max-w-xs"
        >
          <div
            class="mb-1"
            v-html="offer.icon"
          />
          <strong class="block text-sm text-secondary mb-2">
            {{ offer.title }}
          </strong>
          <p class="text-sm text-primary-dark">
            {{ offer.descirption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    intro() {
      return this.$store.state.content.collaboration.intro;
    },
  },
};
</script>
