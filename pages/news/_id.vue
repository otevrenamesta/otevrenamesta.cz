<template>
  <main
    v-if="article"
    class="mt-block-4 max-w-3xl w-10/12 mx-auto"
  >
    <div class="flex items-center mb-block-0.5">
      <div
        v-for="(tag, tagIndex) in article.tags.split(',')"
        :key="tagIndex"
        class="py-1.5 px-2.5 mr-2.5 bg-secondary rounded-3xl leading-none text-[12px] uppercase text-black text-opacity-75 font-bold"
      >
        {{ tag }}
      </div>
    </div>
    <div>
      <nuxt-img
        :src="article.obrazek"
        :alt="article.title"
        width="1200"
        class="mb-block-0.5"
      />
      <h2 class="text-primary font-bold text-4xl mb-block-1 tracking-tight">
        {{ article.title }}
      </h2>
    </div>
    <div
      class="flex flex-wrap prose text-lg"
      v-html="$md.render(article.content)"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },

  head() {
    return {
      title: this.article ? `${this.article.title} ${this.$config.appendTitle}` : this.$config.appendTitle,
    };
  },

  computed: {
    article() {
      return this.articles.find(({ id }) => id === Number(this.$route.params.id));
    },
  },

  async mounted() {
    this.articles = await this.$axios.$get('/uni/posts/?sort=published:desc')
      .catch(() => []);
  },
};
</script>
