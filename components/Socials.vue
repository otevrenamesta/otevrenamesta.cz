<template>
  <div
    class="flex items-center"
    :class="isWhite ? 'IsWhite' : ''"
  >
    <a
      href="#"
      target="_blank"
    >
      <!-- TODO: add link -->
      <IconFacebook />
    </a>
    <a
      href="#"
      target="_blank"
    >
      <!-- TODO: add link -->
      <IconGithub />
    </a>
    <a
      href="#"
      target="_blank"
    >
      <!-- TODO: add link -->
      <IconGitlab />
    </a>
  </div>
</template>

<script>
import IconFacebook from '~/assets/img/icon-facebook.svg?inline';
import IconGithub from '~/assets/img/icon-github.svg?inline';
import IconGitlab from '~/assets/img/icon-gitlab.svg?inline';

export default {
  components: {
    IconFacebook,
    IconGithub,
    IconGitlab,
  },
  props: {
    isWhite: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style langs="scss" scoped>
a {
  @apply ml-2.5 text-primary hover:text-primary-dark;
}

.IsWhite a {
  @apply text-white hover:text-white;
}
</style>
