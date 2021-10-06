<template>
  <main>
    <HomepageHero
      class="mb-block-2"
      :page="page"
    />

    <HomepageIntro
      class="mb-block-1"
    />

    <div class="mb-block-2">
      <div class="container">
        <h2 class="text-primary font-bold text-4xl mb-1 tracking-tight">
          Naše projekty
        </h2>
        <nuxt-link
          :to="localePath('/projects')"
          class="block mb-block-1"
        >
          <Button
            type="transparent"
            icon="icon-arrow-right"
            class="text-secondary px-0"
          >
            Vašechny projekty
          </Button>
        </nuxt-link>
      </div>
      <Projects />
    </div>

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
