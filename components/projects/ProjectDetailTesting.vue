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
    <div class="container flex items-center relative z-10">
      <div class="w-1/2 pr-10 pl-block-2">
        <strong class="block text-secondary uppercase font-bold text-base leading-none mb-block-0.5">
          Otestování produktu
        </strong>
        <h3 class="text-primary text-2xl leading-tight font-bold tracking-tighter">
          Lorem ipsum pecializujeme se na Technickou, právní a manažerskou expertízu v oblasti digitalizace samospráv. Máme bohaté zkušenosti s&nbsp;budováním aplikací na míru pro samosprávní celky
        </h3>
      </div>
      <div class="w-1/2 flex flex-col items-center">
        <strong class="block text-secondary uppercase font-bold text-base leading-none mb-block-0.5 max-w-xs">
          Jak postupovat
        </strong>
        <div
          v-for="(offer, index) in offers"
          :key="index"
          class="mb-block-0.5 max-w-xs"
        >
          <div
            class="mb-1"
            v-html="offer.icon"
          />
          <strong class="block text-sm text-secondary mb-2">
            0{{ index + 1 }}
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
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      offers: [
        {
          descirption: `
            Napište nám na e-mail dsw2@otevrenamesta.cz požádejte o svůj vlastní portál ZDARMA
          `,
        },
        {
          descirption: `
            Vyzkoušejte si administraci dotačního portálu, vytvoření formulářů, vyplnění a odeslání žádosti o dotaci
          `,
        },
        {
          descirption: `
            Rozhodněte se dle Ceníku jak chcete software provozovat
          `,
        },
      ],
    };
  },
};
</script>
