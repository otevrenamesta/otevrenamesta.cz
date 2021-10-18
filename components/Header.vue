<template>
  <header class="absolute top-0 left-0 w-full z-10">
    <div class="container pt-12 flex justify-between flex-wrap">
      <nuxt-link to="/">
        <LogoOm />
      </nuxt-link>

      <nav class="flex items-center flex-wrap">
        <nuxt-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="localePath(item.link)"
          class="NavItem uppercase text-sm text-primary font-semibold ml-10 hover:underline"
          v-text="item.text"
        />

        <!-- <nuxt-link
          :to="switchLocalePath($i18n.locale === 'cs' ? 'en' : 'cs')"
          class="uppercase text-sm font-semibold ml-10 text-secondary"
        >
          {{ $i18n.locale === 'cs' ? 'en' : 'cz' }}
        </nuxt-link> -->
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
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.NavItem.is-active {
  @apply text-secondary;
}
</style>
