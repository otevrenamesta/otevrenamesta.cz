<template>
  <section class="relative pt-block-2 pb-block-2">
    <div
      class="w-block-2 h-block-2 absolute top-0 left-block-2 flex flex-wrap"
    >
      <div class="w-1/2 h-1/2 bg-primary" />
      <div class="w-1/2 h-1/2 bg-primary" />
      <div class="w-1/2 h-1/2 bg-transparent" />
      <div class="w-1/2 h-1/2 bg-primary" />
    </div>
    <div
      class="w-block-4 h-block-4 bg-secondary absolute bottom-0 right-0 rounded-tl-full"
    />
    <div
      class="w-block-4 h-block-4 bg-additional absolute bottom-0 left-0 rounded-full"
    />
    <div class="container flex items-center relative z-10 flex-col lg:flex-row">
      <div class="max-w-lg lg:max-w-full lg:w-1/2 lg:pr-6 lg:pl-block-2 mb-block-1 lg:mb-0">
        <strong class="block text-secondary uppercase font-bold text-base leading-none mb-block-0.5">
          Otestování produktu
        </strong>
        <h3
          class="text-primary text-3xl font-semibold tracking-tighter"
          v-html="$md.render(project.testovani)"
        />
      </div>
      <div class="max-w-lg lg:w-1/2 flex flex-col items-center">
        <strong class="block text-secondary uppercase font-bold text-base leading-none mb-block-0.5 max-w-xs">
          Jak postupovat
        </strong>
        <div
          v-for="(offer, index) in project.jakpostupovat"
          :key="index"
          class="mb-block-0.5 max-w-xs"
        >
          <strong class="block text-sm text-secondary mb-2">
            0{{ index + 1 }}
          </strong>
          <p class="text-sm text-primary-dark">
            {{ offer.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
