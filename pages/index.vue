<template>
  <main v-if="useContentStore().homepage">
    <HomepageHero
      class="mb-block-2"
    />

    <HomepageIntro
      class="mb-block-1"
    />

    <HomepageProjects
      class="sm:mb-block-2"
    />

    <HomepageNews />

    <HomepageEvents
      class="mb-block-2"
    />

    <HomepageValues
      class="mb-block-2"
    />
  </main>
</template>

<script setup>
await useContentStore().load({ page: 'homepage' });
</script>
