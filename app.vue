<template>
  <div>
    <nuxt-layout>
      <nuxt-loading-indicator
        color="#000"
        :height="1"
      />
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup>
useCustomHead({ });
await useContentStore().loadGlobal();
</script>
