<template>
  <section>
    <div class="container">
      <h2 class="text-primary font-bold text-4xl mb-1 tracking-tight">
        {{ projects.title }}
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
          {{ projects.all }}
        </Button>
      </nuxt-link>
    </div>
    <Projects />
  </section>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.content.homepage.projects;
    },
  },
};
</script>
