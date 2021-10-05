<template>
  <section class="container">
    <div class="bg-primary px-block-2 py-block-2">
      <div class="flex justify-between items-center mb-block-1">
        <h2 class="text-white text-4xl font-bold">
          Aktuálně
        </h2>
        <Button
          type="transparent"
          icon="icon-arrow-right"
          class="text-secondary"
        >
          Přejít na všechny články
        </Button>
      </div>
      <div class="flex items-start justify-between -mx-4">
        <article
          v-for="(article, index) in articles"
          :key="index"
          class="w-1/4"
        >
          <div class="px-4">
            <time
              :datetime="article.published"
              class="block text-sm text-additional font-bold mb-2"
            >
              {{ $moment(article.published).format('D. M. yyyy') }}
            </time>
            <h3 class="text-white text-xl font-bold mb-5">
              {{ article.title }}
            </h3>
            <p class="text-white text-opacity-90 text-sm mb-2">
              {{ article.perex }}
            </p>
            <Button
              type="transparent"
              icon="icon-arrow-right"
              class="text-secondary px-0"
            >
              Číst více
            </Button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },

  async mounted() {
    this.articles = await this.$axios.$get('/posts/?sort=published:desc&currentPage=1&perPage=4')
      .then(({ data }) => data)
      .catch(() => []);
  },
};
</script>
