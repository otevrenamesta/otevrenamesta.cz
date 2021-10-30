<template>
  <section>
    <div class="container flex mb-block-2 flex-col lg:flex-row">
      <div class="w-full lg:w-1/2">
        <div class="sm:aspect-w-1 sm:aspect-h-1 bg-additional sm:rounded-full flex items-center justify-center">
          <p class="px-14 sm:px-0 xs:px-10 py-14 sm:py-20 xs:py-10 flex items-center font-bold text-xl sm:w-8/12 mx-auto text-black text-opacity-70">
            Jsme nezisková organiazce, která pomáhá vyvinout Praha 3 pro svou potřebu a využila jej již ve třech dotačních ročnících. Na členské schůzi spolku se nabidka jeho uvolnění i pro další obce z úst Štěpána Štrébla setkala s příznivým ohlasem.
            <br><br>
            Městká část tedy zahájila potřebné kroky, které v rovině politicko-organizační vyvrcholily 2019-10,11 schválením radou MČ a vedením SZM. Vedlejším zobecňujícím efektem bylo jednám zastupitelstva, které zavázalo Prahu 3 napříště zadávat vývoj softwaru pod svobodnu licencí.
          </p>
        </div>
      </div>
      <div class="w-full lg:w-1/2 bg-secondary px-block-1 py-block-0.5 md:px-block-2 md:py-block-1.5">
        <div class="flex items-center justify-between flex-wrap">
          <h2 class="text-white text-3xl font-semibold">
            Naše hodnoty
          </h2>
          <nuxt-link
            to="/"
            class="mt-2 -mr-4"
          >
            <Button
              type="transparent"
              icon="icon-arrow-right"
            >
              Více o nás
            </Button>
          </nuxt-link>
        </div>
        <div>
          <div>
            <div
              v-for="(value, index) in values"
              :key="index"
              class="flex mt-block-1 border-b border-black border-opacity-20 pb-block-1 last:pb-0 last:border-b-0 flex-col md:flex-row"
            >
              <div
                class="mr-block-1 mb-block-0.5 md:mb-0"
                v-html="value.icon"
              />
              <div>
                <strong
                  class="block text-black text-opacity-80 text-lg uppercase font-bold leading-tight mb-2"
                  v-html="value.title"
                />
                <p class="text-white text-sm w-10/12 max-w-full">
                  {{ value.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <MilestonesSection />
  </section>
</template>

<script>
export default {
  data() {
    return {
      values: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="101" height="92" viewBox="0 0 101 92"><g id="Component_57_2" data-name="Component 57 – 2"><path id="Rectangle_654" data-name="Rectangle 654" fill="none" d="M0 0h101v92H0z"/><g id="icon-openness" transform="rotate(45 -409.701 2147.112)" fill="#00563c"><path id="Rectangle_155" data-name="Rectangle 155" transform="translate(-1559.904 307.916)" d="M0 0h9.133v9.133H0z"/><path id="Rectangle_156" data-name="Rectangle 156" transform="translate(-1550.771 307.916)" d="M0 0h9.132v9.133H0z"/><path id="Rectangle_157" data-name="Rectangle 157" transform="translate(-1550.771 317.048)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_158" data-name="Rectangle 158" transform="translate(-1550.772 353.579)" d="M0 0h9.133v9.133H0z"/><path id="Rectangle_159" data-name="Rectangle 159" transform="translate(-1550.772 362.711)" d="M0 0h9.133v9.132H0z"/><path id="Rectangle_160" data-name="Rectangle 160" transform="translate(-1559.904 362.711)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_161" data-name="Rectangle 161" transform="translate(-1596.433 362.71)" d="M0 0h9.133v9.133H0z"/><path id="Rectangle_162" data-name="Rectangle 162" transform="translate(-1605.565 362.71)" d="M0 0h9.132v9.133H0z"/><path id="Rectangle_163" data-name="Rectangle 163" transform="translate(-1605.565 353.579)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_164" data-name="Rectangle 164" transform="translate(-1605.565 317.047)" d="M0 0h9.133v9.133H0z"/><path id="Rectangle_165" data-name="Rectangle 165" transform="translate(-1605.565 307.916)" d="M0 0h9.133v9.132H0z"/><path id="Rectangle_166" data-name="Rectangle 166" transform="translate(-1596.432 307.916)" d="M0 0h9.132v9.132H0z"/></g></g></svg>',
          title: '01&nbsp;&nbsp; Flexiblita',
          description: 'Flexibilita nezisková organiazce, která pomáhá vyvinout Praha 3 pro svou potřebu a využila jej již ve třech dotačních ročnících.',
        },
        {
          icon: '<svg id="Component_57_2" data-name="Component 57 – 2" xmlns="http://www.w3.org/2000/svg" width="101" height="92" viewBox="0 0 101 92"><path id="Rectangle_654" data-name="Rectangle 654" fill="none" d="M0 0h101v92H0z"/><g id="icon-flexibility" transform="translate(1262.252 -289.962)" fill="#00563c"><path id="Rectangle_123" data-name="Rectangle 123" transform="translate(-1262.252 340.489)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_124" data-name="Rectangle 124" transform="translate(-1262.252 349.621)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_125" data-name="Rectangle 125" transform="translate(-1262.252 358.753)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_126" data-name="Rectangle 126" transform="translate(-1253.121 358.753)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_127" data-name="Rectangle 127" transform="translate(-1207.461 349.621)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_128" data-name="Rectangle 128" transform="translate(-1243.989 313.094)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_129" data-name="Rectangle 129" transform="translate(-1253.121 313.094)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_130" data-name="Rectangle 130" transform="translate(-1262.252 313.094)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_131" data-name="Rectangle 131" transform="translate(-1207.461 322.225)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_132" data-name="Rectangle 132" transform="translate(-1207.461 313.094)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_133" data-name="Rectangle 133" transform="translate(-1207.461 303.962)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_134" data-name="Rectangle 134" transform="translate(-1216.593 303.962)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_135" data-name="Rectangle 135" transform="translate(-1243.989 303.962)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_136" data-name="Rectangle 136" transform="translate(-1225.725 358.753)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_137" data-name="Rectangle 137" transform="translate(-1216.593 349.621)" d="M0 0h9.132v9.132H0z"/><path id="Rectangle_138" data-name="Rectangle 138" transform="translate(-1225.725 349.621)" d="M0 0h9.132v9.132H0z"/></g></svg>',
          title: '02&nbsp;&nbsp; Flexiblita',
          description: 'Flexibilita nezisková organiazce, která pomáhá vyvinout Praha 3 pro svou potřebu a využila jej již ve třech dotačních ročnících.',
        },
        {
          icon: '<svg id="Component_57_2" data-name="Component 57 – 2" xmlns="http://www.w3.org/2000/svg" width="101" height="92" viewBox="0 0 101 92"><g id="icon-innovation" transform="translate(1444.216 -301.408)" fill="#00563c"><path id="Rectangle_139" data-name="Rectangle 139" transform="translate(-1425.892 301.785)" d="M0 0h9.163v9.162H0z"/><path id="Rectangle_140" data-name="Rectangle 140" transform="translate(-1425.892 310.947)" d="M0 0h9.163v9.163H0z"/><path id="Rectangle_141" data-name="Rectangle 141" transform="translate(-1435.054 320.11)" d="M0 0h9.162v9.162H0z"/><path id="Rectangle_142" data-name="Rectangle 142" transform="translate(-1444.216 320.11)" d="M0 0h9.162v9.162H0z"/><path id="Rectangle_143" data-name="Rectangle 143" transform="translate(-1407.567 320.11)" d="M0 0h9.162v9.163H0z"/><path id="Rectangle_144" data-name="Rectangle 144" transform="translate(-1416.729 320.11)" d="M0 0h9.163v9.163H0z"/><path id="Rectangle_145" data-name="Rectangle 145" transform="translate(-1425.891 329.272)" d="M0 0h9.162v9.162H0z"/><path id="Rectangle_146" data-name="Rectangle 146" transform="translate(-1425.891 338.435)" d="M0 0h9.162v9.162H0z"/><path id="Rectangle_147" data-name="Rectangle 147" transform="translate(-1398.404 356.759)" d="M0 0h9.162v9.163H0z"/><path id="Rectangle_148" data-name="Rectangle 148" transform="translate(-1407.567 356.759)" d="M0 0h9.163v9.163H0z"/><path id="Rectangle_149" data-name="Rectangle 149" transform="translate(-1380.079 384.246)" d="M0 0h9.162v9.162H0z"/><path id="Rectangle_150" data-name="Rectangle 150" transform="translate(-1380.079 375.084)" d="M0 0h9.162v9.162H0z"/><path id="Rectangle_151" data-name="Rectangle 151" transform="translate(-1380.079 329.272)" d="M0 0h9.163v9.162H0z"/><path id="Rectangle_152" data-name="Rectangle 152" transform="translate(-1380.079 338.434)" d="M0 0h9.163v9.163H0z"/><path id="Rectangle_153" data-name="Rectangle 153" transform="translate(-1352.592 356.759)" d="M0 0h9.162v9.162H0z"/><path id="Rectangle_154" data-name="Rectangle 154" transform="translate(-1361.754 356.759)" d="M0 0h9.162v9.162H0z"/></g><path id="Rectangle_654" data-name="Rectangle 654" fill="none" d="M0 0h101v92H0z"/></svg>',
          title: '03&nbsp;&nbsp; Flexiblita',
          description: 'Flexibilita nezisková organiazce, která pomáhá vyvinout Praha 3 pro svou potřebu a využila jej již ve třech dotačních ročnících.',
        },
      ],
    };
  },
};
</script>
