<template>
  <article class="relative -mt-px w-auto flex flex-col justify-start items-start mb-block-2 sm:mb-0">
    <Grid
      :rows="8"
      class="hidden sm:block"
    />

    <div
      class="relative sm:absolute z-20 sm:top-block-2 bg-white border border-secondary border-t-0 border-r-0 sm:w-block-10 sm:h-block-12"
      :class="props.align === 'left' ? 'sm:left-block-2' : 'sm:right-block-2'"
    >
      <div class="BoxDecorations BoxDecorations--top-left" />
      <div class="BoxDecorations BoxDecorations--top-right" />

      <div class="box-border sm:px-block-1 px-block-0.75 pt-block-1 sm:pt-block-1.5 h-full border border-secondary border-b-0 border-l-0 -mt-px -mr-px overflow-auto pb-6 sm:flex sm:flex-col sm:justify-center">
        <div
          v-if="!$grid?.sm"
          class="w-block-4 max-w-full h-auto mb-block-0.5"
        >
          <img
            v-if="props.project.illustration"
            :src="`${useRuntimeConfig().public.assetsUrl}/${props.project.illustration}`"
            :alt="props.project.title"
            class="w-full"
          >
        </div>
        <h2 class="text-5xl sm:text-6xl text-primary font-bold mb-10 tracking-tight">
          {{ props.project.title }}
        </h2>
        <strong class="block text-2xl text-secondary mb-8 tracking-tight">
          {{ props.project.subtitle }}
        </strong>
        <p
          class="text-primary text-base font-medium mb-7"
          v-html="props.project.perex"
        />
        <nuxt-link
          :to="$localePath(`/projects/${props.project.id}`)"
        >
          <Button
            class="mb-block-1"
            icon="icon-arrow-open"
          >
            Zjistit více
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
      </div>

      <div class="BoxDecorations BoxDecorations--bottom-left" />
      <div class="BoxDecorations BoxDecorations--bottom-right" />
    </div>

    <div
      v-if="$grid?.md"
      class="absolute z-10 top-block-2 w-block-12 hidden sm:block"
      :class="[
        props.align === 'left' ? 'right-block-2' : 'left-block-2',
      ]"
    >
      <img
        v-if="props.project.illustration"
        :src="`${useRuntimeConfig().public.assetsUrl}/${props.project.illustration}`"
        :alt="props.project.title"
        class="w-full"
      >
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  align: {
    type: String,
    default: 'left',
  },
});
</script>

<style scoped>
@reference '~/assets/css/tailwind.css';

.BoxDecorations {
  width: 20px;
  height: 20px;
  position: absolute;

  &::before,
  &::after {
    @apply bg-secondary;
    content: '';
    display: block;
  }

  &::before {
    transform: translateY(8px);
    width: 100%;
    height: 3px;
  }

  &::after {
    transform: translateX(8px) translateY(-3px);
    width: 3px;
    height: 100%;
  }

  &.BoxDecorations--top-left {
    top: -10px;
    left: -10px;
  }
  &.BoxDecorations--top-right {
    top: -10px;
    right: -11px;
  }

  &.BoxDecorations--bottom-left {
    bottom: -11px;
    left: -10px;
  }
  &.BoxDecorations--bottom-right {
    bottom: -11px;
    right: -11px;
  }
}
</style>
