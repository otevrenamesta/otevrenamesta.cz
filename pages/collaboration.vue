<template>
  <main>
    <CollaborationHero
      class="mb-block-2"
    />

    <CollaborationIntro
      class="mb-block-2"
    />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: `Spolupráce ${this.$config.appendTitle}`,
    };
  },
};
</script>
