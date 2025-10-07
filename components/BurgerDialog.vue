<template>
  <div
    ref="dialogRef"
    class="fixed z-50 top-0 left-0 w-full h-full bg-white lg:hidden"
    :hidden="!useUiStore().isBurgerDialogOpen"
  >
    <div class="bg-primary-light/60 h-full">
      <div class="container flex flex-col justify-between h-full py-block-0.5 overflow-auto">
        <div>
          <LogoOm
            class="w-40 h-auto"
          />

          <button
            class="w-10 sm:w-14 h-10 sm:h-14 bg-primary text-white flex items-center justify-center absolute top-block-0.75 right-block-1"
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

        <nav class="flex flex-col gap-block-0.5 py-block-5 flex-1">
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

<script setup>
import LogoOm from '~/assets/img/logo-om.svg';

const dialogRef = ref(null);
const uiStore = useUiStore();

// Get all focusable elements within the dialog
const getFocusableElements = () => {
  if (!dialogRef.value) return [];

  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ];

  return Array.from(
    dialogRef.value.querySelectorAll(focusableSelectors.join(',')),
  ).filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
};

// Handle Tab key to trap focus
const handleKeyDown = (e) => {
  if (!uiStore.isBurgerDialogOpen) return;

  // Handle Escape key
  if (e.key === 'Escape') {
    uiStore.setBurgerDialogOpen(false);
    return;
  }

  // Handle Tab key for focus trap
  if (e.key === 'Tab') {
    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // If Shift + Tab on first element, go to last
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      // If Tab on last element, go to first
      e.preventDefault();
      firstElement.focus();
    }
  }
};

// Watch for dialog open state changes
watch(() => uiStore.isBurgerDialogOpen, (isOpen) => {
  if (isOpen) {
    // Disable page scroll
    document.body.style.overflow = 'hidden';

    nextTick(() => {
      // Focus the first focusable element
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    });
  } else {
    // Re-enable page scroll
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});

const menuItems = computed(() => useContentStore().global?.menuItems);
</script>

<style scoped>
@reference '~/assets/css/tailwind.css';

.NavItem.router-link-active {
  @apply text-secondary;
}
</style>
