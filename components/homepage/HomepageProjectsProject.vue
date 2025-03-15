<template>
  <article class="relative z-20 sm:top-block-2">
    <nuxt-link
      :to="$localePath(`/projects/${project.id}`)"
      class="h-full pb-6 sm:flex sm:flex-col sm:justify-center group"
    >
      <div
        class="w-block-6 h-block-6 max-w-full mb-block-0.5 [&_svg]:w-full [&_svg]:h-auto"
        v-html="props.illustration"
      />
      <h2 class="text-3xl sm:text-4xl text-primary font-bold mb-10 tracking-tight group-hover:underline">
        {{ props.project.title }}
      </h2>
      <strong class="block text-2xl text-secondary mb-8 tracking-tight">
        {{ props.project.subtitle }}
      </strong>
      <p
        class="text-primary text-base font-medium mb-7"
        v-html="props.project.perex"
      />
      <!-- <nuxt-link
        :to="$localePath(`/projects/${props.project.id}`)"
      >
        <Button
          class="mb-block-1"
          icon="icon-arrow-open"
        >
          Zjistit více
        </Button>
      </nuxt-link> -->

      <div class="flex justify-between flex-wrap items-start">
        <div
          v-if="props.project.logo"
          v-html="props.project.logo"
        />
        <div
          v-if="props.project.badge"
          class="py-2 px-4 bg-additional rounded-3xl leading-none text-sm uppercase text-black/75 font-bold mt-4"
        >
          {{ props.project.badge }}
        </div>
      </div>
    </nuxt-link>
  </article>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  illustration: {
    type: String,
    required: true,
  },
});
</script>
