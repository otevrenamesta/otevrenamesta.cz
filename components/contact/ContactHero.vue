<template>
  <section class="flex items-end relative pt-block-3">
    <div class="container relative flex flex-col justify-start items-start">
      <div class="flex flex-col justify-start items-start relative w-full">
        <div class="w-full">
          <h2
            class="text-primary text-4xl lg:text-5xl 2xl:text-6xl xs:text-4xl leading-tight font-bold tracking-tighter mb-block-1 sm:absolute z-10 bottom-auto lg:bottom-block-4 left-0 sm:left-block-2 sm:-mb-2 mt-8"
            v-html="hero.title"
          />
          <div class="w-full s:w-auto sm:w-block-20 h-auto sm:h-block-14 lg:h-block-10 bg-primary sm:absolute z-10 bottom-0 right-0 s:right-block-1.5 xl:right-block-4 px-block-0.75 sm:px-block-1 xs:px-block-0.5 py-block-1 sm:py-block-1.5">
            <a
              :href="`mailto:${contact.email}`"
              class="block text-white text-2xl sm:text-3xl font-bold mb-block-1 hover:underline"
            >
              {{ contact.email }}
            </a>
            <div class="text-white mb-12">
              <strong class="block mb-2 text-base">
                {{ contact.name }}
              </strong>
              <p
                class="text-base font-medium"
                v-html="contact.address"
              />
              <br>
              <p class="text-sm font-medium">
                <span
                  class="underline-links"
                  v-html="contact.bank"
                />
                <br>
                <span v-html="contact.iban || ''" />
              </p>
            </div>
            <!-- <p class="text-white text-sm font-medium mb-12">
            U obecnějších témat zvažte jejich otevření na <a href="#" class="underline">webfóru</a>
          </p> -->
            <Socials is-white />
          </div>
          <div
            class="w-block-2 h-block-2 absolute bottom-0 left-0 flex-wrap hidden md:flex"
          >
            <div class="w-1/2 h-1/2 bg-primary" />
            <div class="w-1/2 h-1/2 bg-primary" />
            <div class="w-1/2 h-1/2 bg-transparent" />
            <div class="w-1/2 h-1/2 bg-primary" />
          </div>
        </div>

        <div
          class="w-block-2 sm:w-block-4 h-block-2 sm:h-block-4 bg-secondary absolute bottom-0 sm:bottom-auto sm:top-0 right-0 sm:-right-block-2 rounded-br-full"
        />
        <div
          class="w-block-2 sm:w-block-4 h-block-2 sm:h-block-4 bg-additional absolute right-0 sm:right-auto left-auto sm:left-block-4 top-0 sm:top-block-2 rounded-full"
        />
        <div
          class="w-block-2 h-block-2 bg-primary absolute bottom-block-4 right-0 hidden xl:block"
        />
        <Grid
          :rows="$grid?.md ? 7 : 9"
          class="hidden sm:block"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    contact() {
      return useContentStore().global.contact;
    },
    hero() {
      return useContentStore().contact.hero;
    },
  },
};
</script>
