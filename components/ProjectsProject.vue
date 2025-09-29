<template>
  <article class="relative z-20 p-8">
    <nuxt-link
      :to="$localePath(`/projects/${project.id}`)"
      class="h-full pb-6 sm:flex sm:flex-col group"
    >
      <div
        class="size-27.5 bg-primary-100 rounded-lg max-w-full [&_svg]:w-full [&_svg]:h-auto p-4 flex items-center justify-center mb-7.5 border-4 border-white group-hover:ring group-hover:ring-primary-300"
      >
        <img
          v-if="props.project?.illustration"
          :src="`${useRuntimeConfig().public.assetsUrl}/${props.project.illustration}`"
          :alt="props.project.title"
          class="w-full"
        >
      </div>
      <h2 class="text-2xl text-primary font-bold mb-2 tracking-tight group-hover:underline">
        {{ props.project.title }}
      </h2>
      <div class="block text-base text-gray mb-4 tracking-tight">
        {{ props.project.subtitle }}
      </div>
      <!-- <p
        class="text-primary text-base font-medium mb-4"
        v-html="props.project.perex"
      /> -->
      <nuxt-link
        :to="$localePath(`/projects/${props.project.id}`)"
      >
        <Button
          type="transparent"
          icon="icon-arrow-right-link"
          class="text-secondary"
        >
          {{ useContentStore().homepage.projects.showDetail }}
        </Button>
      </nuxt-link>

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
});
</script>
