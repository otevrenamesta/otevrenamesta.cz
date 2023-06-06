<template>
  <section class="pb-block-2">
    <div
      class="mb-block-1"
      v-html="project.logo"
    />

    <div
      class="text-primary font-semibold text-3xl mb-block-1"
      v-html="project.perex"
    />

    <div class="flex justify-between flex-col sm:flex-row gap-4 sm:gap-0">
      <div class="flex flex-col sm:flex-row gap-4">
        <a
          v-if="project.web?.length"
          :href="project.web"
          target="_blank"
        >
          <Button
            icon="icon-arrow-open"
          >
            Otevřít web
          </Button>
        </a>
        <a
          v-if="project.pricelist?.length"
          :href="project.pricelist"
          target="_blank"
        >
          <Button
            type="outline"
            icon="icon-arrow-open"
          >
            Ceník
          </Button>
        </a>
        <a
          v-if="project.demo?.length"
          :href="project.demo"
          target="_blank"
        >
          <Button
            type="outline"
            icon="icon-arrow-open"
          >
            Vyzkoušet demo
          </Button>
        </a>
      </div>
      <div>
        <a
          v-if="project.code"
          :href="project.code"
          target="_blank"
        >
          <Button
            type="transparent"
            icon="icon-arrow-right"
            class="text-secondary"
          >
            Zobrazit zdrojový kód
          </Button>
        </a>
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
