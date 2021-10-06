<template>
  <main class="mt-block-4 container">
    <div>
      <h2 class="text-primary font-bold text-4xl mb-block-1 tracking-tight">
        Články
      </h2>
    </div>
    <div class="flex items-center flex-wrap mb-block-2">
      <button
        v-for="(tag, index) in tags"
        :key="index"
        class="py-1.5 px-2.5 mr-2.5 border border-secondary rounded-3xl leading-none text-[12px] uppercase font-bold flex items-center"
        :class="selectedTag === tag ? 'bg-secondary text-black text-opacity-75' : 'text-secondary'"
        @click="selectedTag = selectedTag === tag ? null : tag"
      >
        {{ tag }}
        <IconClose
          v-if="selectedTag === tag"
          class="ml-2.5"
        />
      </button>
    </div>
    <div class="flex flex-wrap -mx-block-0.5">
      <nuxt-link
        v-for="(article, index) in articlesFiltered"
        :key="index"
        :to="localePath(`/news/${article.id}`)"
        class="block w-1/3 mb-block-2"
      >
        <div class="px-block-0.5">
          <nuxt-img
            :src="article.obrazek"
            :alt="article.title"
            width="600"
            class="mb-block-0.5"
          />
          <div
            class="mb-4 flex"
          >
            <div
              v-for="(tag, tagIndex) in article.tags.split(',')"
              :key="tagIndex"
              class="py-1.5 px-2.5 mr-2.5 bg-secondary rounded-3xl leading-none text-[12px] uppercase text-black text-opacity-75 font-bold"
            >
              {{ tag }}
            </div>
          </div>
          <h3 class="text-primary font-bold text-2xl tracking-tight mb-2 hover:underline">
            {{ article.title }}
          </h3>
          <p class="text-primary font-medium">
            {{ article.perex }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import _uniq from 'lodash/uniq';
import IconClose from '~/assets/img/icon-close.svg?inline';

export default {
  components: {
    IconClose,
  },

  data() {
    return {
      articles: [],
      selectedTag: null,
    };
  },

  computed: {
    tags() {
      return _uniq(this.articles.map(({ tags }) => tags.split(',')).flat());
    },
    articlesFiltered() {
      return this.articles.filter(({ tags }) => !this.selectedTag || tags.includes(this.selectedTag));
    },
  },

  async mounted() {
    this.articles = await this.$axios.$get('/posts/?sort=published:desc')
      .catch(() => []);
  },
};
</script>
