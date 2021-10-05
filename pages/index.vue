<template>
  <main>
    <HomepageHero
      class="mb-block-2"
      :page="page"
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
  async asyncData({ $content, app }) {
    const page = await $content(`${app.i18n.locale}/homepage`).fetch();

    return {
      page,
    };
  },
};
</script>
