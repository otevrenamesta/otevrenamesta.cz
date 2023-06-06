<template>
  <div
    v-if="socials"
    class="flex items-center gap-2.5"
    :class="isWhite ? 'IsWhite' : ''"
  >
    <a
      v-for="(social, index) in socials"
      :key="index"
      :href="social.url"
      target="_blank"
      :class="isWhite ? 'text-white hover:text-white' : 'text-primary hover:text-primary-dark'"
      v-html="social.icon"
    />
  </div>
</template>

<script>
export default {
  props: {
    isWhite: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    socials() {
      return useContentStore().global?.socials;
    },
  },
};
</script>
