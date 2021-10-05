<template>
  <button
    class="transition bg-primary text-white uppercase text-sm font-semibold px-5 py-3 flex items-center justify-center"
    :class="[
      type === 'primary' ? 'bg-primary hover:bg-primary-dark' : '',
      type === 'transparent' ? 'bg-transparent' : '',
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <template v-if="$slots.default">
      <slot />
    </template>
    <compontent
      :is="icon"
      v-if="icon"
      class="ml-5 mt-px"
    />
  </button>
</template>

<script>
import IconArrowOpen from '~/assets/img/icon-arrow-open.svg?inline';
import IconArrowRight from '~/assets/img/icon-arrow-right.svg?inline';

export default {
  components: {
    IconArrowOpen,
    IconArrowRight,
  },

  props: {
    type: {
      type: String,
      default: 'primary',
    },
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
    icon: {
      type: String,
      default: null,
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
