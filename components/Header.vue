<template>
  <header class="absolute top-0 left-0 w-full z-10">
    <div class="container pt-12 flex justify-between">
      <LogoOm />

      <nav class="flex items-center">
        <nuxt-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.link"
          class="NavItem uppercase text-sm text-primary font-semibold ml-10 hover:underline"
          v-text="item.text"
        />
      </nav>
    </div>
  </header>
</template>

<script>
import LogoOm from '~/assets/img/logo-om.svg?inline';

export default {
  components: {
    LogoOm,
  },
  data() {
    return {
      menuItems: [
        {
          link: '/',
          text: 'O nás',
        },
        {
          link: '/',
          text: 'Spolupráce',
        },
        {
          link: '/',
          text: 'Projekty',
        },
        {
          link: '/',
          text: 'Členové',
        },
        {
          link: '/',
          text: 'Aktuality',
        },
        {
          link: '/',
          text: 'Kontakt',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.NavItem.is-active {
  @apply text-secondary;
}
</style>
