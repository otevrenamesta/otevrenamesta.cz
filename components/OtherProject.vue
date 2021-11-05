<template>
  <div class="px-8 py-block-1">
    <div class="max-w-xs">
      <h2 class="text-primary font-bold text-3xl mb-5">
        Cityvizor
      </h2>
      <strong class="block text-secondary text-lg mb-7">
        Transparentní hospodaření pro každé město a obec
      </strong>
      <nuxt-link
        :to="localePath('/')"
      >
        <Button icon="icon-arrow-open">
          Zjistit více
        </Button>
      </nuxt-link>
    </div>
  </div>
</template>
