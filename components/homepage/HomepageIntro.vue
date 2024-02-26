<template>
  <section class="container bg-primary-light bg-opacity-60 px-14 md:px-20 xs:px-8 py-14 md:py-20 xs:py-10">
    <div class="flex justify-between flex-col md:flex-row">
      <div class="max-w-4xl md:mr-6 md:mb-20">
        <h3
          class="text-2xl xs:text-xl text-primary-dark mb-14 font-semibold max-w-xl"
          v-html=" intro.title"
        />
      </div>

      <div class="mb-block-1 w-full md:w-block-7 xs:w-block-4 max-w-full lg:mr-4 md:mb-0">
        <strong class="block text-secondary uppercase text-base mb-10">
          {{ intro.partners.title }}
        </strong>
        <div class="flex flex-wrap gap-x-[6%] gap-y-2">
          <div
            v-for="(partner, index) in intro.partners.items"
            :key="index"
            class="sm:w-[44%]"
          >
            <a
              :href="partner.url"
              target="_blank"
              class="block mb-10"
            >
              <img
                :src="partner.logo"
                :alt="partner.url"
                class="w-auto h-14"
              >
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-md md:max-w-4xl">
      <strong class="block text-secondary uppercase text-base mb-4">
        {{ intro.offers.title }}
      </strong>

      <div class="flex justify-between gap-block-1 xs:gap-block-0.5 flex-col md:flex-row">
        <div
          v-for="(offer, index) in intro.offers.items"
          :key="index"
          class="w-full md:w-1/3"
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
      return useContentStore().homepage.intro;
    },
  },
};
</script>
