<template>
  <div>
    <div
      v-for="row in rows"
      :key="row"
      class="flex w-auto"
    >
      <div
        v-for="column in columnsComputed"
        :key="column"
        class="w-block-2 h-block-2 border border-primary-light border-r-0 last:border-r"
        :class="row === 1 ? 'border-t' : 'border-t-0'"
      />
    </div>
  </div>
</template>

<script>
import _clamp from 'lodash/clamp';

export default {
  props: {
    columns: {
      type: Number,
      default: null,
    },
    rows: {
      type: Number,
      default: null,
    },
  },

  computed: {
    columnsComputed() {
      if (this.columns) {
        return this.columns;
      }

      const BLOCK_SIZE = 60;
      const CONTAINER = 0.9;
      return _clamp(Math.floor((this.$screen.width * CONTAINER) / (BLOCK_SIZE * 2)), 0, 14);
    },
  },
};
</script>
