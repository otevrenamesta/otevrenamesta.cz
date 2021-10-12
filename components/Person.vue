<template>
  <article>
    <img
      :src="person.img"
      :alt="person.fullname"
      class="mb-6"
    >
    <h3 class="text-lg uppercase font-bold mb-1">
      {{ person.fullname }}
    </h3>
    <span class="block uppercase text-sm mb-4">
      {{ person.subtitle }}
    </span>
    <p class="text-sm mb-5">
      {{ person.description }}
    </p>
    <div class="mb-5">
      <a
        v-if="person.email"
        :href="`mailto:${person.email}`"
        class="block text-sm font-bold hover:underline"
      >
        {{ person.email }}
      </a>
      <a
        v-if="person.phone"
        :href="`tel:${person.phone}`"
        class="block text-sm font-bold hover:underline"
      >
        {{ person.phone }}
      </a>
    </div>
    <div class="flex items-center">
      <a
        v-if="person.facebook"
        :href="person.facebook"
        class="mr-2.5 hover:opacity-75"
      >
        <IconFacebook />
      </a>
      <a
        v-if="person.instagram"
        :href="person.instagram"
        class="mr-2.5 hover:opacity-75"
      >
        <IconInstagram />
      </a>
      <a
        v-if="person.linkedin"
        :href="person.linkedin"
        class="mr-2.5 hover:opacity-75"
      >
        <IconLinkedin />
      </a>
      <a
        v-if="person.twitter"
        :href="person.twitter"
        class="mr-2.5 hover:opacity-75"
      >
        <IconTwitter />
      </a>
    </div>
  </article>
</template>

<script>
import IconFacebook from '~/assets/img/icon-facebook.svg?inline';
import IconInstagram from '~/assets/img/icon-instagram.svg?inline';
import IconTwitter from '~/assets/img/icon-twitter.svg?inline';
import IconLinkedin from '~/assets/img/icon-linkedin.svg?inline';

export default {
  components: {
    IconFacebook,
    IconInstagram,
    IconLinkedin,
    IconTwitter,
  },
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>
