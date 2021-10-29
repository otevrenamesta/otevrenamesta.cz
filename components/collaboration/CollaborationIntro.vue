<template>
  <section class="relative">
    <div
      class="w-block-2 h-block-2 absolute bottom-0 left-0 flex flex-wrap"
    >
      <div class="w-1/2 h-1/2 bg-primary" />
      <div class="w-1/2 h-1/2 bg-primary" />
      <div class="w-1/2 h-1/2 bg-transparent" />
      <div class="w-1/2 h-1/2 bg-primary" />
    </div>
    <div
      class="w-block-2 h-block-2 bg-secondary absolute -bottom-block-1 right-0 rounded-br-full"
    />

    <div class="container flex items-center">
      <div class="w-1/2 max-w-3xl pr-10">
        <strong class="block text-secondary uppercase font-bold text-base leading-none mb-block-0.5">
          Jak získat produkt
        </strong>
        <h3 class="text-primary text-3xl font-semibold leading-snug tracking-tighter">
          Lorem ipsum pecializujeme se na Technickou, právní a manažerskou expertízu v oblasti digitalizace samospráv. Máme bohaté zkušenosti s&nbsp;budováním aplikací na míru pro samosprávní celky
        </h3>
      </div>
      <div class="w-1/2 flex flex-col items-center">
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
  data() {
    return {
      offers: [
        {
          title: 'Konzultace',
          descirption: `
            Specializujeme se na Technickou, právní a manažerskou expertízu
            v oblasti digitalizace samospráv.
          `,
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path fill="none" d="M0 0h60v60H0z"/><g fill="#0f0087"><path data-name="Rectangle 250" d="M27.436 18.195a4.708 4.708 0 014.708-4.708h14.122a4.708 4.708 0 014.708 4.708H27.436z"/><path data-name="Rectangle 251" d="M27.436 22.902h23.538v4.708h-18.83a4.708 4.708 0 01-4.708-4.708z"/><path data-name="Rectangle 252" d="M46.266 22.902v-4.708h4.708v4.708z"/><path data-name="Rectangle 253" d="M46.266 27.61h4.708v4.708a4.708 4.708 0 01-4.708-4.708z"/><path data-name="Rectangle 254" d="M9.027 46.44v-4.708h4.708a4.708 4.708 0 01-4.708 4.708z"/><path data-name="Rectangle 255" d="M27.436 22.902v-4.708h4.708v4.708z"/><path data-name="Rectangle 256" d="M9.027 22.902a4.708 4.708 0 014.708-4.708h9.415v4.708H9.027z"/><path data-name="Rectangle 257" d="M9.027 37.025V22.902h4.708v14.123z"/><path data-name="Rectangle 258" d="M37.273 37.025v-4.707h4.708v4.707z"/><path data-name="Rectangle 259" d="M9.027 41.733v-4.708H41.98a4.708 4.708 0 01-4.707 4.708H9.027z"/></g></svg>',
        },
        {
          title: 'Vývoj software',
          descirption: `
            Máme bohaté zkušenosti s budováním aplikací na míru pro samosprávní celky
          `,
          icon: '<svg data-name="Component 15 – 2" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path data-name="Rectangle 119" fill="none" d="M0 0h60v60H0z"/><g data-name="Group 169" fill="#0f0087"><path data-name="Rectangle 76" d="M17.15 36.45l3.075-3.075 3.075 3.074-3.075 3.076z"/><path data-name="Rectangle 77" d="M20.225 39.525L23.3 36.45l3.075 3.074L23.3 42.6z"/><path data-name="Rectangle 78" d="M14.075 33.375L17.15 30.3l3.075 3.075-3.075 3.075z"/><path data-name="Rectangle 79" d="M11 30.3l3.075-3.075 3.075 3.074-3.075 3.076z"/><path data-name="Rectangle 80" d="M14.075 27.225l3.075-3.075 3.074 3.075L17.15 30.3z"/><path data-name="Rectangle 81" d="M17.15 24.15l3.075-3.075 3.074 3.075-3.074 3.075z"/><path data-name="Rectangle 82" d="M20.225 21.075L23.3 18l3.074 3.075L23.3 24.15z"/><path data-name="Rectangle 83" d="M36.892 24.15l3.075-3.075 3.075 3.074-3.075 3.076z"/><path data-name="Rectangle 84" d="M33.817 21.075L36.892 18l3.075 3.074-3.075 3.076z"/><path data-name="Rectangle 85" d="M39.967 27.225l3.075-3.075 3.075 3.075-3.075 3.075z"/><path data-name="Rectangle 86" d="M43.042 30.3l3.075-3.075 3.075 3.074-3.075 3.076z"/><path data-name="Rectangle 87" d="M39.967 33.375l3.075-3.075 3.074 3.075-3.074 3.075z"/><path data-name="Rectangle 88" d="M36.892 36.45l3.075-3.075 3.074 3.075-3.074 3.075z"/><path data-name="Rectangle 89" d="M33.817 39.525l3.075-3.075 3.074 3.075-3.074 3.075z"/></g></svg>',
        },
        {
          title: 'Znalostní databáze',
          descirption: `
            Dělíme se o know-how existujících projektů, postupů a podnětů k opakovanému využití
          `,
          icon: '<svg data-name="Component 15 – 2" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path data-name="Rectangle 119" fill="none" d="M0 0h60v60H0z"/><g data-name="Group 170" fill="#0f0087"><path data-name="Rectangle 60" d="M21.697 19h4.348v4.349h-4.348z"/><path data-name="Rectangle 61" d="M13 19h4.348v21.745H13z"/><path data-name="Rectangle 62" d="M26.045 19h4.348v4.349h-4.348z"/><path data-name="Rectangle 63" d="M30.394 19h4.349v4.349h-4.349z"/><path data-name="Rectangle 64" d="M34.743 19h4.348v4.349h-4.348z"/><path data-name="Rectangle 65" d="M39.091 19h4.348v4.349h-4.348z"/><path data-name="Rectangle 66" d="M21.697 27.698h4.348v4.349h-4.348z"/><path data-name="Rectangle 67" d="M26.045 27.698h4.348v4.349h-4.348z"/><path data-name="Rectangle 68" d="M30.394 27.698h4.349v4.349h-4.349z"/><path data-name="Rectangle 69" d="M34.743 27.698h4.348v4.349h-4.348z"/><path data-name="Rectangle 70" d="M39.091 27.698h4.348v4.349h-4.348z"/><path data-name="Rectangle 71" d="M43.44 27.698h4.348v4.349H43.44z"/><path data-name="Rectangle 72" d="M21.697 36.396h4.348v4.349h-4.348z"/><path data-name="Rectangle 73" d="M26.045 36.396h4.348v4.349h-4.348z"/><path data-name="Rectangle 74" d="M30.394 36.396h4.349v4.349h-4.349z"/><path data-name="Rectangle 75" d="M34.743 36.396h4.348v4.349h-4.348z"/></g></svg>',
        },
      ],
    };
  },
};
</script>
