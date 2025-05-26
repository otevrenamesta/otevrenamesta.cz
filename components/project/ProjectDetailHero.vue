<template>
  <section class="flex items-end relative pt-block-3">
    <div class="container relative flex flex-col justify-start items-start">
      <div class="absolute z-10 bottom-block-1 left-0">
        <div
          v-if="project.badge"
          class="py-2 px-4 bg-additional rounded-3xl leading-none text-sm uppercase text-black/75 font-bold inline-block mb-3"
        >
          {{ project.badge }}
        </div>
        <h2 class="text-primary text-5xl md:text-6xl lg:text-8xl leading-tight font-bold tracking-tighter md:w-[60%]">
          {{ project.title }}
        </h2>
      </div>
      <div class="flex flex-col justify-start items-start relative w-auto">
        <p
          v-preposition-space
          class="absolute right-auto md:right-block-1 -bottom-block-2 md:bottom-block-1 text-secondary text-3xl font-bold max-w-lg md:max-w-xs"
        >
          {{ project.subtitle }}
        </p>
        <div class="absolute top-block-2 left-0 w-full">
          <div
            class="w-block-6 lg:w-block-8 mx-auto"
          >
            <img
              v-if="props.project?.illustration"
              :src="`${useRuntimeConfig().public.assetsUrl}/${props.project.illustration}`"
              :alt="props.project.title"
              class="w-full"
            >
          </div>
        </div>
        <Grid
          :rows="$grid?.sm ? 6 : 7"
        />
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
