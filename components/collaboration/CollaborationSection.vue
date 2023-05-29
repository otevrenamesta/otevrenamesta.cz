<template>
  <div class="container flex flex-col lg:flex-row -mt-px">
    <div class="relative">
      <Grid
        :columns="$grid?.xl ? 6 : 5"
        :rows="illustration === 'illustration-collaboration-2' ? 7 : ($grid?.xl ? 6 : 5)"
      />
      <component
        :is="illustration"
        class="absolute top-block-1.5 sm:top-block-2 left-block-1.5 sm:left-block-2 h-auto"
        :class="$grid?.xl && illustration !== 'illustration-collaboration-2' ? 'w-block-8' : 'w-block-4.5 sm:w-block-6'"
      />
    </div>
    <div class="p-0 lg:p-block-0.5 xl:p-block-1.5 pt-block-1 pb-0 xl:pb-0">
      <slot />
    </div>
  </div>
</template>

<script>
import IllustrationCollaboration1 from '~/assets/img/illustration-collaboration-1.svg';
import IllustrationCollaboration2 from '~/assets/img/illustration-collaboration-2.svg';
import IllustrationCollaboration3 from '~/assets/img/illustration-collaboration-3.svg';

export default {
  components: {
    IllustrationCollaboration1,
    IllustrationCollaboration2,
    IllustrationCollaboration3,
  },
  props: {
    illustration: {
      type: String,
      required: true,
    },
  },
};
</script>
