<template>
  <main
    v-if="article"
    class="mt-block-4 max-w-3xl w-10/12 mx-auto [&_table_tr]:align-top [&_table_td]:p-2 blogpost"
  >
    <div class="flex items-center mb-block-0.5">
      <div
        v-for="(tag, tagIndex) in article.tags.split(',')"
        :key="tagIndex"
        class="py-1.5 px-2.5 mr-2.5 bg-secondary rounded-3xl leading-none text-[12px] uppercase text-black/75 font-bold"
      >
        {{ tag }}
      </div>
    </div>
    <div class="mb-block-0.5">
      <nuxt-img
        :src="article.image"
        :alt="article.title"
        width="1200"
        class="mb-block-0.5"
      />
      <h2 class="text-primary font-bold text-4xl mb-4 tracking-tight">
        {{ article.title }}
      </h2>
      <time
        :datetime="article.published"
        class="block text-sm text-dark font-bold mb-2"
      >
        {{ useDayjs(article.published).format('D. M. YYYY') }}
      </time>
    </div>
    <div
      class="flex flex-wrap prose text-lg"
      v-html="$md.render(article.content)"
    />
  </main>
</template>

<script setup>
// Refs
const article = ref(null);

// Lifecycle
onMounted(async() => {
  const articles = await useApi.get(`/items/posts/?lang=${useI18n()?.locale?.value}&filter={"id":{"_eq":${Number(useRoute().params.id)}}}`)
    .catch((error) => {
      console.error(error);

      return { data: [] };
    });

  article.value = articles.data?.[0];

  useCustomHead({
    title: article.value?.title,
    description: article.value?.perex,
  });
});
</script>
