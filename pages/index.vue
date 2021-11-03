<template>
  <main v-if="$store.state.content.homepage">
    <HomepageHero
      class="mb-block-2"
    />

    <HomepageIntro
      class="mb-block-1"
    />

    <HomepageProjects
      class="mb-block-2"
    />

    <HomepageValues
      class="mb-block-2"
    />

    <HomepageNews />
  </main>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('content/load', { page: 'homepage' });
  },
};
</script>
