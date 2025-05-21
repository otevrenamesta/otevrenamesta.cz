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
await Promise.all([
  useContentStore().loadGlobal(),
  useContentStore().load({ page: 'homepage' }),
  useContentStore().load({ page: 'about' }),
  useContentStore().load({ page: 'collaboration' }),
  useContentStore().load({ page: 'members' }),
  useContentStore().load({ page: 'contact' }),
  useContentStore().load({ page: 'project' }),
  useContentStore().load({ page: 'declaration' }),
  useContentStore().load({ page: 'events' }),
  useContentStore().load({ page: 'czechOspo' }),
]).catch(console.error);
</script>
