<template>
  <section class="container">
    <div class="bg-primary px-block-1 py-block-1 md:px-block-2 md:py-block-2">
      <div class="flex justify-between items-center mb-block-1 flex-wrap">
        <h2 class="text-white text-4xl font-bold tracking-tight">
          {{ news.title }}
        </h2>
        <nuxt-link :to="$localePath('/news')">
          <Button
            type="transparent"
            icon="icon-arrow-right"
            class="text-secondary"
          >
            {{ news.showMore }}
          </Button>
        </nuxt-link>
      </div>
      <div class="flex items-start justify-between flex-wrap gap-4">
        <article
          v-for="(article, index) in articles"
          :key="index"
          class="w-full sm:w-1/3 lg:w-1/5 max-w-md mb-4 sm:mb-6"
        >
          <time
            :datetime="article.published"
            class="block text-sm text-additional font-bold mb-2"
          >
            {{ useDayjs(article.published).format('D. M. YYYY') }}
          </time>
          <h3 class="text-white text-xl font-bold mb-5">
            {{ article.title }}
          </h3>
          <p class="text-white/90 text-sm mb-2">
            {{ article.perex }}
          </p>
          <nuxt-link
            :to="$localePath(`/news/${article.id}`)"
          >
            <Button
              type="transparent"
              icon="icon-arrow-right"
              class="text-secondary px-0"
            >
              Číst více
            </Button>
          </nuxt-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// Refs
const articles = ref([]);

// Computed
const news = useContentStore().homepage.news;

// Lifecycle
onMounted(async() => {
  articles.value = await useApi.get(`/items/posts/?sort=-published&limit=4&lang=${useI18n()?.locale?.value}`)
    .then(({ data }) => data)
    .catch((error) => {
      console.error(error);
      return [];
    });
});
</script>
