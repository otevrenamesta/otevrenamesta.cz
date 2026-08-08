<template>
  <main class="mt-block-2 md:mt-block-4 container">
    <div>
      <h1 class="text-primary text-4xl font-semibold mb-block-1">GDPR - Zpracování osobních údajů</h1>
      <p class="text-primary">
        Soubor GDPR je dostupný ke stažení ve formátu PDF.
      </p>

      <p class="mt-4">
        <a
          :href="pdfUrl"
          download
          target="_blank"
          class="text-secondary font-semibold hover:underline"
        >
          Odkaz pro stažení
        </a>
      </p>
    </div>
    <div class="mt-block-3 md:mt-block-5 container"></div>
  </main>
</template>

<script setup>

await useContentStore().load({ page: 'gdpr' });

useCustomHead({
  title: "GDPR"
});

const pdfUrl = 'https://api.www.otevrenamesta.cz/assets/e1a9f9d7-ef79-403a-b066-a5d0d9354066.pdf?download';

</script>
