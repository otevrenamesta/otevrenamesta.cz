<template>
  <div
    class="fixed z-50 top-0 left-0 w-full h-full bg-white lg:hidden"
    :hidden="!useUiStore().isBurgerDialogOpen"
  >
    <div class="bg-primary-light/60 h-full">
      <div class="container flex flex-col justify-between h-full py-block-0.5 overflow-auto">
        <div>
          <LogoOm
            class="w-44 h-auto"
          />

          <button
            class="w-10 sm:w-14 h-10 sm:h-14 bg-primary text-white flex items-center justify-center absolute top-block-0.75 right-block-0.5"
            @click="() => useUiStore().setBurgerDialogOpen(false)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.314"
              height="11.314"
              viewBox="0 0 11.314 11.314"
            >
              <g
                transform="translate(-327.344 -51.343)"
                fill="currentColor"
              >
                <path
                  transform="rotate(45 102.403 422.518)"
                  d="M0 0h14v2H0z"
                />
                <path
                  transform="rotate(135 158.402 96.517)"
                  d="M0 0h14v2H0z"
                />
              </g>
            </svg>
          </button>
        </div>

        <nav class="flex flex-col gap-block-0.5 py-block-1">
          <nuxt-link
            v-for="(item, index) in menuItems"
            :key="index"
            :to="$localePath(item.link)"
            class="NavItem uppercase text-base text-primary font-semibold hover:underline"
            exact
          >
            {{ item.text }}
          </nuxt-link>

          <a
            :href="$switchLocalePath($i18n.locale === 'cs' ? 'en' : 'cs')"
            class="uppercase text-sm font-semibold text-secondary"
          >
            {{ $i18n.locale === 'cs' ? 'en' : 'cz' }}
          </a>
        </nav>

        <Socials />
      </div>
    </div>
  </div>
</template>

<script>
import LogoOm from '~/assets/img/logo-om.svg';

export default {
  components: {
    LogoOm,
  },
  computed: {
    menuItems() {
      return useContentStore().global?.menuItems;
    },
  },
};
</script>

<style scoped>
@reference '~/assets/css/tailwind.css';

.NavItem.router-link-active {
  @apply text-secondary;
}
</style>
