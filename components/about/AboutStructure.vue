<template>
  <section class="container flex">
    <div class="w-1/2 border-r border-primary-light">
      <div class="w-block-6">
        <IconLogoOm
          class="mb-block-1.5"
        />

        <h2 class="mb-7 text-primary text-4xl font-bold">
          Struktura <br>
          organizace
        </h2>
        <p class="text-primary text-base font-medium">
          Opensource projekt, původně z dílny Ministerstva financí ČR, přináší přehlednou vizualizaci rozpočtu obce s detailními daty až na úroveň jednotlivých faktur a otevírá tím její hospodaření.
        </p>
      </div>
    </div>
    <div class="w-1/2 flex flex-col items-end">
      <article
        v-for="(structure, index) in structures"
        :key="index"
        class="flex mb-block-1 last:mb-0"
      >
        <div
          class="mr-block-1"
          v-html="structure.icon"
        />
        <div>
          <span
            class="inline-block text-black text-opacity-60 text-sm font-bold px-1.5 py-1.5 leading-none mb-2.5"
            :class="`bg-${structure.color}`"
          >
            {{ structure.number }}
          </span>
          <h3
            class="text-lg font-bold uppercase mb-2"
            :class="`text-${structure.color}`"
          >
            {{ structure.title }}
          </h3>
          <p class="text-sm max-w-sm">
            {{ structure.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import IconLogoOm from '~/assets/img/icon-logo-om.svg?inline';

export default {
  components: {
    IconLogoOm,
  },
  data() {
    return {
      structures: [
        {
          color: 'additional',
          number: '01',
          title: 'Kontrolor',
          description: 'Flexibilita nezisková organiazce, která pomáhá vyvinout Praha 3 pro svou potřebu a využila jej již ve třech dotačních ročnících.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g id="Group_58" data-name="Group 58" transform="translate(.5 .5)" fill="none" stroke="#fc0" stroke-width="1"><path id="Rectangle_223" data-name="Rectangle 223" transform="rotate(90 15 15)" d="M0 0h30v30H0z"/><path id="Rectangle_224" data-name="Rectangle 224" transform="rotate(90 14.5 44.5)" d="M0 0h29v29H0z"/><path id="Rectangle_225" data-name="Rectangle 225" transform="rotate(90 29.5 29.5)" d="M0 0h30v29H0z"/></g></svg>',
        },
        {
          color: 'secondary',
          number: '02',
          title: 'Projektová rada',
          description: 'Flexibilita nezisková organiazce, která pomáhá vyvinout Praha 3 pro svou potřebu a využila jej již ve třech dotačních ročnících.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g id="Group_58" data-name="Group 58" transform="translate(.5 .5)" fill="none" stroke="#fc0" stroke-width="1"><path id="Rectangle_223" data-name="Rectangle 223" transform="rotate(90 15 15)" d="M0 0h30v30H0z"/><path id="Rectangle_224" data-name="Rectangle 224" transform="rotate(90 14.5 44.5)" d="M0 0h29v29H0z"/><path id="Rectangle_225" data-name="Rectangle 225" transform="rotate(90 29.5 29.5)" d="M0 0h30v29H0z"/></g></svg>',
        },
        {
          color: 'primary-dark',
          number: '03',
          title: 'Výbor',
          description: 'Flexibilita nezisková organiazce, která pomáhá vyvinout Praha 3 pro svou potřebu a využila jej již ve třech dotačních ročnících.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g id="Group_58" data-name="Group 58" transform="translate(.5 .5)" fill="none" stroke="#fc0" stroke-width="1"><path id="Rectangle_223" data-name="Rectangle 223" transform="rotate(90 15 15)" d="M0 0h30v30H0z"/><path id="Rectangle_224" data-name="Rectangle 224" transform="rotate(90 14.5 44.5)" d="M0 0h29v29H0z"/><path id="Rectangle_225" data-name="Rectangle 225" transform="rotate(90 29.5 29.5)" d="M0 0h30v29H0z"/></g></svg>',
        },
        // TODO: nechat si vyexportovat ikony v jendom artboardu
      ],
    };
  },
};
</script>
