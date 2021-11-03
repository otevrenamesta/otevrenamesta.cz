<template>
  <main v-if="$store.state.content.about">
    <AboutHero
      class="mb-block-2"
    />

    <MilestonesSection
      class="mb-block-3"
    />

    <AboutStructure
      class="mb-block-3"
    />

    <AboutTeam
      class="mb-block-1"
    />
  </main>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('content/load', { page: 'about' });
  },
  head() {
    return {
      title: `O nás ${this.$config.appendTitle}`,
    };
  },
};
</script>
