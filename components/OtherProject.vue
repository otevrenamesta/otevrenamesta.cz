<template>
  <div class="px-8 py-block-1">
    <div class="max-w-xs">
      <h2 class="text-primary font-bold text-3xl mb-5">
        {{ useContentStore().global.otherProject.title }}
      </h2>
      <strong class="block text-secondary text-lg mb-7">
        {{ useContentStore().global.otherProject.subtitle }}
      </strong>
      <nuxt-link
        :to="$localePath('/')"
      >
        <Button icon="icon-arrow-open">
          {{ useContentStore().global.otherProject.button }}
        </Button>
      </nuxt-link>
    </div>
  </div>
</template>
