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
          :to="$localePath(item.link)"
          class="NavItem uppercase text-sm text-primary font-semibold ml-6 xl:ml-10 hover:underline"
          exact
        >
          {{ item.text }}
        </nuxt-link>

        <a
          :href="$switchLocalePath(useI18n().locale?.value === 'cs' ? 'en' : 'cs')"
          class="uppercase text-sm font-semibold ml-10 text-secondary"
        >
          {{ useI18n().locale?.value === 'cs' ? 'en' : 'cz' }}
        </a>
      </nav>

      <button
        class="w-10 sm:w-14 h-10 sm:h-14 bg-primary-light bg-opacity-60 text-primary flex items-center justify-center absolute top-block-0.75 right-block-0.5 lg:hidden mr-2"
        @click="() => useUiStore().setBurgerDialogOpen(true)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="12"
          viewBox="0 0 14 12"
        >
          <g transform="translate(-701 -52)">
            <rect
              width="14"
              height="2"
              transform="translate(701 62)"
              fill="currentColor"
            />
            <rect
              width="14"
              height="2"
              transform="translate(701 57)"
              fill="currentColor"
            />
            <rect
              width="14"
              height="2"
              transform="translate(701 52)"
              fill="currentColor"
            />
          </g>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import LogoOm from '~/assets/img/logo-om.svg';

// Computed
const menuItems = useContentStore().global?.menuItems || [];
</script>

<style scoped>
.NavItem.router-link-active {
  @apply text-secondary;
}
</style>
