<template>
  <section class="pb-block-2">
    <div
      class="mb-block-1"
      v-html="project.logo"
    />

    <div
      class="text-primary font-semibold text-3xl mb-block-1"
      v-html="project.description"
    />

    <div class="flex justify-between">
      <div class="flex">
        <nuxt-link
          to="/"
          class="mr-4"
        >
          <Button
            icon="icon-arrow-open"
          >
            Navštívit web
          </Button>
        </nuxt-link>
        <nuxt-link
          to="/"
        >
          <Button
            type="outline"
            icon="icon-arrow-open"
          >
            Vyzkoušet demo
          </Button>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link
          to="/"
        >
          <Button
            type="transparent"
            icon="icon-arrow-right"
            class="text-secondary"
          >
            Zobrazit zdrojový kód
          </Button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
