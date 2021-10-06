<template>
  <div class="container flex">
    <div class="relative">
      <Grid
        :columns="6"
        :rows="7"
      />
      <component
        :is="illustration"
        class="absolute top-block-2 left-block-2"
      />
    </div>
    <div class="p-block-1.5 pt-block-1 pb-0">
      <slot />
    </div>
  </div>
</template>

<script>
import IllustrationCollaboration1 from '~/assets/img/illustration-collaboration-1.svg?inline';
import IllustrationCollaboration2 from '~/assets/img/illustration-collaboration-2.svg?inline';
import IllustrationCollaboration3 from '~/assets/img/illustration-collaboration-3.svg?inline';

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
