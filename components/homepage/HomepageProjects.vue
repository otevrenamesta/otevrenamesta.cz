<template>
  <div class="container">
    <h2 class="text-primary font-bold text-4xl mb-2">
      Naše projekty
    </h2>
    <nuxt-link
      to="/"
      class="uppercase text-secondary text-sm font-bold flex items-center group"
    >
      <span>Vašechny projekty</span>
      <IconArrowRight
        class="ml-2 transform transition group-hover:translate-x-0.5"
      />
    </nuxt-link>
  </div>
</template>

<script>
import IconArrowRight from '~/assets/img/icon-arrow-right.svg?inline';

export default {
  components: {
    IconArrowRight,
  },
};
</script>
