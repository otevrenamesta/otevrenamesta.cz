<template>
  <div class="flex items-center">
    <a
      href="#"
      target="_blank"
      class="ml-2.5 text-primary hover:text-primary-dark"
    >
      <!-- TODO: add link -->
      <IconFacebook />
    </a>
    <a
      href="#"
      target="_blank"
      class="ml-2.5 text-primary hover:text-primary-dark"
    >
      <!-- TODO: add link -->
      <IconGithub />
    </a>
    <a
      href="#"
      target="_blank"
      class="ml-2.5 text-primary hover:text-primary-dark"
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
};
</script>
