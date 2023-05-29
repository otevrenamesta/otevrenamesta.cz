<template>
  <div>
    <div class="relative w-full mb-2">
      <div class="bg-secondary rounded-xl text-sm px-1.5 py-px inline-block font-semibold text-white relative z-10">
        {{ item.date }}
      </div>
      <div
        class="bg-secondary h-px w-full absolute top-1/2 left-0 xs:hidden"
        :class="isLast ? 'hidden' : ''"
      />
    </div>
    <p class="text-base font-semibold pr-3">
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
