<template>
  <section class="flex items-end relative pt-block-2">
    <div class="container relative flex flex-col justify-start items-start">
      <div class="absolute z-10 top-block-2 left-block-4">
        <strong class="block text-secondary uppercase font-bold text-base leading-none mb-block-2 -mt-0.5">
          O nás
        </strong>
        <h2 class="text-primary text-6xl font-bold tracking-tighter -mt-6 w-2/3">
          Lorem ipsum pecializujeme se na Technickou, právní a manažerskou expertízu v oblasti digitalizace samospráv. Máme bohaté zkušenosti s budováním aplikací na míru pro samosprávní celky
        </h2>
      </div>
      <div class="flex flex-col justify-start items-start relative w-auto">
        <div
          class="w-block-2 h-block-2 absolute top-block-2 left-0 flex flex-wrap"
        >
          <div class="w-1/2 h-1/2 bg-primary" />
          <div class="w-1/2 h-1/2 bg-primary" />
          <div class="w-1/2 h-1/2 bg-transparent" />
          <div class="w-1/2 h-1/2 bg-primary" />
        </div>
        <div
          class="w-block-4 h-block-4 bg-secondary absolute bottom-0 -left-block-2 rounded-br-full"
        />
        <div
          class="w-block-4 h-block-4 bg-additional absolute top-block-2 right-block-2 rounded-full"
        />
        <div
          class="w-block-2 h-block-2 bg-primary absolute bottom-block-2 right-block-2"
        />
        <Grid
          :rows="7"
        />
      </div>
    </div>
  </section>
</template>

<script>
// import AboutHeroBg from '~/assets/img/about-hero-bg.svg?inline';

export default {
  components: {
    // AboutHeroBg,
  },
};
</script>
