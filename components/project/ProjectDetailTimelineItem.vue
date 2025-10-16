<template>
  <div>
    <div class="relative w-full mb-2">
      <div class="rounded text-primary bg-primary-200 inline-block px-1 leading-relaxed pb-0.5">
        {{ item.date }}
      </div>
    </div>
    <p class="text-base pr-3 text-gray">
      {{ item.title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
