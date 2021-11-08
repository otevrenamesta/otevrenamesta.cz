<template>
  <section class="flex items-end relative pt-block-3">
    <div class="container relative flex flex-col justify-start items-start">
      <div class="absolute z-10 bottom-block-1 left-0">
        <div
          v-if="project.badge"
          class="py-2 px-4 bg-additional rounded-3xl leading-none text-sm uppercase text-black text-opacity-75 font-bold inline-block mb-3"
        >
          {{ project.badge }}
        </div>
        <h2 class="text-primary text-8xl leading-tight font-bold tracking-tighter w-2/3">
          {{ project.title }}
        </h2>
      </div>
      <div class="flex flex-col justify-start items-start relative w-auto">
        <p class="absolute right-block-1 bottom-block-1 text-secondary text-3xl font-bold max-w-xs">
          {{ project.slogan }}
        </p>
        <div class="absolute -top-block-2 left-0 w-full">
          <div
            class="w-block-12 mx-auto"
            v-html="illustration"
          />
        </div>
        <Grid
          :rows="5"
        />
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
    illustration: {
      type: String,
      required: true,
    },
  },
};
</script>
