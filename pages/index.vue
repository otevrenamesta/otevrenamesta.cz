<template>
  <main>
    <HomepageHero />

    <HomepageIntro />
  </main>
</template>

<script>
export default {
  async mounted() {
    console.log(await this.$content('hello').fetch());
  },
};
</script>
