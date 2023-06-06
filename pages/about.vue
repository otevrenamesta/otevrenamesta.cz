<template>
  <main v-if="useContentStore().about">
    <AboutHero
      class="mb-block-2"
    />

    <MilestonesSection
      class="mb-block-3"
    />

    <AboutStructure
      class="mb-block-3"
    />

    <AboutTeam
      class="mb-block-1"
    />
  </main>
</template>

<script setup>
await useContentStore().load({ page: 'about' });

useCustomHead({
  title: useContentStore().about?.hero?.title,
});
</script>
