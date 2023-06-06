<template>
  <div>
    <div
      ref="BlockTemplate"
      class="w-block-0.75 sm:w-block-1 h-0"
    />
    <div
      v-for="row in props.rows"
      :key="row"
      class="flex w-auto "
    >
      <div
        v-for="column in columnsComputed"
        :key="column"
        class="w-block-1.5 sm:w-block-2 h-block-1.5 sm:h-block-2 border border-primary-light border-r-0 last:border-r"
        :class="[
          row === 1 ? 'border-t' : 'border-t-0',
          props.inverse ? 'bg-primary border-opacity-20' : '',
        ]"
      />
    </div>
  </div>
</template>

<script setup>
import _clamp from 'lodash/clamp';
import { useScreen } from 'vue-screen';

const props = defineProps({
  columns: {
    type: Number,
    default: null,
  },
  rows: {
    type: Number,
    default: null,
  },
  inverse: {
    type: Boolean,
    default: false,
  },
});

// Refs
const BlockTemplate = ref(null);
const screen = useScreen();

// Computed
const columnsComputed = computed(() => {
  if (props.columns) {
    return props.columns;
  }

  const BLOCK_SIZE = process.client && BlockTemplate.value ? BlockTemplate.value?.offsetWidth : 60;
  const CONTAINER = 0.91;
  const width = process.client ? screen.width : 1500;
  return _clamp(Math.floor((width * CONTAINER) / (BLOCK_SIZE * 2)), 0, 16);
});
</script>
