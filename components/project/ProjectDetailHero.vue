<template>
  <section class="relative">
    <div class="relative flex gap-12 p-8 flex-col sm:flex-row">
      <div
        class="size-78 bg-primary-100 rounded-lg max-w-full [&_svg]:w-full [&_svg]:h-auto p-4 flex items-center justify-center"
      >
        <img
          v-if="props.project?.illustration"
          :src="`${useRuntimeConfig().public.assetsUrl}/${props.project.illustration}`"
          :alt="props.project.title"
          class="w-full"
        >
      </div>

      <div class="flex-1">
        <div class="mb-5">
          <div
            v-if="project.badge"
            class="py-2 px-4 bg-additional rounded-3xl leading-none text-sm uppercase text-black/75 font-bold inline-block mb-3"
          >
            {{ project.badge }}
          </div>
          <h2 class="text-primary text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
            {{ project.title }}
          </h2>
        </div>
        <div class="flex flex-col justify-start items-start relative w-auto mb-12">
          <p
            v-preposition-space
            class="text-xl text-gray max-w-xl"
          >
            {{ project.subtitle }}
          </p>
        </div>
        <div class="max-w-lg">
          <h3 class="text-primary text-lg font-bold mb-3">
            Hlavní funkce
          </h3>
          <div
            v-preposition-space
            class="text-gray"
            v-html="project.funkce"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-between flex-col sm:flex-row gap-4 sm:gap-0 border-t border-primary-light p-8">
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
            class="text-secondary"
          >
            Zobrazit zdrojový kód
          </Button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
