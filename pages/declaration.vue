<template>
  <main v-if="useContentStore().declaration">
    <DeclarationHero />

    <div class="flex -mt-px border-t border-b border-primary-light flex-col lg:flex-row relative">
      <div
        class="w-block-2 h-block-2 absolute top-0 right-0 flex-wrap hidden md:flex"
      >
        <div class="w-1/2 h-1/2 bg-primary" />
        <div class="w-1/2 h-1/2 bg-primary" />
        <div class="w-1/2 h-1/2 bg-transparent" />
        <div class="w-1/2 h-1/2 bg-primary" />
      </div>
      <div class="w-full lg:w-8/12 lg:border-r border-primary-light">
        <DeclarationIntro class="w-11/12 lg:w-block-12 max-w-full mx-auto pt-block-2" />
      </div>
      <div class="border-t border-primary-light lg:w-4/12 lg:border-none relative">
        <DeclarationAction
          class="w-11/12 lg:w-block-6 max-w-full mx-auto"
        />
        <div
          class="w-block-2 h-block-2 bg-secondary absolute bottom-0 right-0 rounded-br-full xs:hidden"
        />
      </div>
    </div>

    <DeclarationSignatories
      id="signatories"
      class="mb-block-3"
    />

    <DeclarationSupport />
  </main>
</template>

<script setup>
await useContentStore().load({ page: 'declaration' });

useCustomHead({
  title: useContentStore().declaration?.hero?.title,
});
</script>
