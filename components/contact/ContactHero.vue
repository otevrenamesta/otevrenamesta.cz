<template>
  <section class="flex items-end relative pt-block-3">
    <div class="container relative flex flex-col justify-start items-start">
      <div class="flex flex-col justify-start items-start relative w-auto">
        <h2
          class="text-primary text-6xl leading-tight font-bold tracking-tighter absolute z-10 bottom-block-2 left-block-4 -mb-2"
          v-html="hero.title"
        />
        <div class="w-block-10 h-block-10 bg-primary absolute z-10 bottom-0 right-block-4 px-block-1 py-block-1.5">
          <a
            :href="`mailto:${contact.email}`"
            class="block text-white text-3xl font-bold mb-block-1 hover:underline"
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
              <span v-html="contact.bank" />
              <br>
              <span v-html="contact.iban" />
            </p>
          </div>
          <!-- <p class="text-white text-sm font-medium mb-12">
            U obecnějších témat zvažte jejich otevření na <a href="#" class="underline">webfóru</a>
          </p> -->
          <Socials is-white />
        </div>
        <div
          class="w-block-2 h-block-2 absolute bottom-0 left-0 flex flex-wrap"
        >
          <div class="w-1/2 h-1/2 bg-primary" />
          <div class="w-1/2 h-1/2 bg-primary" />
          <div class="w-1/2 h-1/2 bg-transparent" />
          <div class="w-1/2 h-1/2 bg-primary" />
        </div>
        <div
          class="w-block-4 h-block-4 bg-secondary absolute top-0 right-0 rounded-br-full"
        />
        <div
          class="w-block-4 h-block-4 bg-additional absolute left-block-4 top-block-2 rounded-full"
        />
        <div
          class="w-block-2 h-block-2 bg-primary absolute bottom-block-4 right-0"
        />
        <Grid
          :rows="7"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    contact() {
      return this.$store.state.content.global.contact;
    },
    hero() {
      return this.$store.state.content.contact.hero;
    },
  },
};
</script>
