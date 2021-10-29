<template>
  <button
    class="transition group text-white uppercase text-sm font-semibold px-5 py-3 flex items-center justify-center"
    :class="[
      type === 'primary' ? 'border border-primary bg-primary hover:bg-primary-dark' : '',
      type === 'secondary' ? 'border border-secondary bg-secondary' : '',
      type === 'dark' ? 'bg-black bg-opacity-60' : '',
      type === 'transparent' ? 'bg-transparent' : '',
      type === 'outline' ? 'border border-primary text-primary' : '',
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
      class="ml-5 mt-px transform transition"
      :class="[
        icon === 'icon-arrow-open' ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5' : '',
        icon === 'icon-arrow-right' ? 'group-hover:translate-x-0.5' : '',
      ]"
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
