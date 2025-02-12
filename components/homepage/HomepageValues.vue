<template>
  <section>
    <div class="container flex mb-block-2 flex-col xl:flex-row">
      <div class="w-full xl:w-1/2 max-w-4xl mx-auto">
        <div class="sm:aspect-w-1 sm:aspect-h-1 sm:bg-additional sm:rounded-full flex items-center justify-center">
          <p
            v-preposition-space
            class="px-0 py-14 sm:py-20 xs:py-10 flex items-center font-bold text-3xl sm:w-8/12 mx-auto text-secondary sm:text-black/70"
            v-html="values.claim"
          />
        </div>
      </div>
      <div class="w-full xl:w-1/2 bg-secondary px-block-1 py-block-0.5 md:px-block-2 xs:px-block-1 md:py-block-1.5">
        <div class="flex items-center justify-between flex-wrap">
          <h2 class="text-white text-3xl font-semibold">
            {{ values.title }}
          </h2>
          <nuxt-link
            :to="$localePath('/about')"
            class="mt-2 -mr-4"
          >
            <Button
              type="transparent"
              icon="icon-arrow-right"
            >
              {{ values.showMore }}
            </Button>
          </nuxt-link>
        </div>
        <div>
          <div>
            <div
              v-for="(value, index) in values.items"
              :key="index"
              class="flex mt-block-1 border-b border-black/20 pb-block-1 last:pb-0 last:border-b-0 flex-col md:flex-row"
            >
              <div
                class="mr-block-1 mb-block-0.5 w-block-2 shrink-0 md:mb-0"
                v-html="value.icon"
              />
              <div>
                <strong
                  class="block text-black/80 text-lg uppercase font-bold leading-tight mb-2"
                  v-html="value.title"
                />
                <p
                  v-preposition-space
                  class="text-white text-sm w-10/12 max-w-full"
                >
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
  computed: {
    values() {
      return useContentStore().homepage.values;
    },
  },
};
</script>
