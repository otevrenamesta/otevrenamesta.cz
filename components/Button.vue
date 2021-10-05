<template>
  <button
    class="transition bg-primary text-white uppercase text-sm font-semibold px-5 py-3 flex items-center justify-center hover:bg-primary-dark"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <template v-if="$slots.default">
      <slot />
    </template>
    <IconArrowOpen class="ml-5 mt-px" />
  </button>
</template>

<script>
import IconArrowOpen from '~/assets/img/icon-arrow-open.svg?inline';

export default {
  components: {
    IconArrowOpen,
  },

  props: {
    nativeType: {
      type: String,
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
