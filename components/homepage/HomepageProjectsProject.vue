<template>
  <article class="relative -mt-px w-auto flex flex-col justify-start items-start">
    <div
      v-for="column in 8"
      :key="column"
      class="flex w-auto"
    >
      <div
        v-for="row in rows"
        :key="row"
        class="w-block-2 h-block-2 border border-primary-light border-r-0 last:border-r"
        :class="column === 1 ? 'border-t' : 'border-t-0'"
      />
    </div>

    <div
      class="box- absolute z-20 top-block-2 bg-white border border-secondary border-t-0 border-r-0 w-block-10 h-block-12"
      :class="align === 'left' ? 'left-block-2' : 'right-block-2'"
    >
      <div class="BoxDecorations BoxDecorations--top-left" />
      <div class="BoxDecorations BoxDecorations--top-right" />

      <div class="box-border px-block-1 pt-block-1.5 h-full border border-secondary border-b-0 border-l-0 -mt-px -mr-px overflow-auto pb-6">
        <h2 class="text-6xl text-primary font-bold mb-10">
          {{ project.title }}
        </h2>
        <strong class="block text-2xl text-secondary mb-8">
          {{ project.slogan }}
        </strong>
        <p
          class="text-primary text-base font-medium mb-7"
          v-html="project.description"
        />
        <Button
          class="mb-block-1"
          icon="icon-arrow-open"
        >
          Zjistit více
        </Button>

        <div class="flex justify-between items-start">
          <div
            v-html="project.logo"
          />
          <div
            v-if="project.badge"
            class="py-2 px-4 bg-additional rounded-3xl leading-none text-sm uppercase text-black text-opacity-75 font-bold"
          >
            {{ project.badge }}
          </div>
        </div>
      </div>

      <div class="BoxDecorations BoxDecorations--bottom-left" />
      <div class="BoxDecorations BoxDecorations--bottom-right" />
    </div>

    <div
      class="absolute z-10 top-block-2 w-block-12"
      :class="align === 'left' ? 'right-block-2' : 'left-block-2'"
      v-html="project.illustration"
    />
  </article>
</template>

<script>
import _clamp from 'lodash/clamp';

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    align: {
      type: String,
      default: 'left',
    },
  },
  computed: {
    rows() {
      const BLOCK_SIZE = 60;
      const CONTAINER = 0.9;
      return _clamp(Math.floor((this.$screen.width * CONTAINER) / (BLOCK_SIZE * 2)), 0, 14);
    },
  },
};
</script>

<style lang="scss" scoped>
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
    transform: translateX(8px) translateY(-2px);
    width: 3px;
    height: 100%;
  }

  &--top-left {
    top: -10px;
    left: -10px;
  }
  &--top-right {
    top: -10px;
    right: -11px;
  }

  &--bottom-left {
    bottom: -11px;
    left: -10px;
  }
  &--bottom-right {
    bottom: -11px;
    right: -11px;
  }
}
</style>
