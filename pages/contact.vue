<template>
  <main v-if="$store.state.content.contact">
    <ContactHero
      class="mb-block-2"
    />

    <div class="container">
      <h2 class="text-primary-dark font-bold text-4xl mb-5">
        {{ leadership.title }}
      </h2>
      <strong class="block text-sm text-secondary">
        {{ leadership.subtitle }}
      </strong>
      <a
        :href="`mailto:${leadership.email}`"
        class="text-primary text-sm block mb-block-0.5 hover:underline"
      >
        {{ leadership.email }}
      </a>
      <div class="flex flex-wrap -mx-6 md:-mx-block-0.5">
        <div
          v-for="(perosn, index) in $store.state.content.global.leaderships"
          :key="index"
          class="px-6 md:px-block-0.5 w-1/2 xs:w-full md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <Person
            :person="perosn"
            class="text-primary-dark mb-block-1"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('content/load', { page: 'contact' });
  },

  head() {
    return {
      title: `${this.$store.state.content.contact?.title} ${this.$config.appendTitle}`,
    };
  },

  computed: {
    leadership() {
      return this.$store.state.content.contact?.leadership;
    },
  },
};
</script>
