<template>
  <header class="absolute top-0 left-0 w-full z-10">
    <div class="container pt-block-0.5 lg:pt-12 flex justify-between flex-wrap">
      <nuxt-link to="/">
        <LogoOm
          class="w-40 xl:w-auto h-auto"
        />
      </nuxt-link>

      <nav class="items-center flex-wrap hidden lg:flex">
        <nuxt-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="localePath(item.link)"
          class="NavItem uppercase text-sm text-primary font-semibold ml-6 xl:ml-10 hover:underline"
          exact
          v-text="item.text"
        />

        <!-- <nuxt-link
          :to="switchLocalePath($i18n.locale === 'cs' ? 'en' : 'cs')"
          class="uppercase text-sm font-semibold ml-10 text-secondary"
        >
          {{ $i18n.locale === 'cs' ? 'en' : 'cz' }}
        </nuxt-link> -->
      </nav>

      <button
        class="w-10 sm:w-14 h-10 sm:h-14 bg-primary-light bg-opacity-60 text-primary flex items-center justify-center absolute top-block-0.75 right-block-0.5 lg:hidden"
        @click="() => $store.commit('ui/setIsBurgerMenuOpen', true)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12">
          <g transform="translate(-701 -52)">
            <rect width="14" height="2" transform="translate(701 62)" fill="currentColor" />
            <rect width="14" height="2" transform="translate(701 57)" fill="currentColor" />
            <rect width="14" height="2" transform="translate(701 52)" fill="currentColor" />
          </g>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
import LogoOm from '~/assets/img/logo-om.svg?inline';

export default {
  components: {
    LogoOm,
  },
  computed: {
    menuItems() {
      return this.$store.state.content.global.menuItems;
    },
  },
};
</script>

<style lang="scss" scoped>
.NavItem.is-active {
  @apply text-secondary;
}
</style>
