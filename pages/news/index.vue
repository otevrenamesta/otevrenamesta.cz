<template>
  <main class="mt-block-3 md:mt-block-4 container">
    <div>
      <h2 class="text-primary font-bold text-4xl mb-block-0.5 md:mb-block-1 tracking-tight">
        Články
      </h2>
    </div>
    <div class="flex items-center flex-wrap mb-block-1 sm:mb-block-2">
      <button
        v-for="(tag, index) in tags"
        :key="index"
        class="py-1.5 px-2.5 mr-2.5 border border-secondary rounded-3xl leading-none text-[12px] uppercase font-bold flex items-center"
        :class="selectedTag === tag ? 'bg-secondary text-black/75' : 'text-secondary'"
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
        :to="$localePath(`/news/${article.id}`)"
        class="block w-full sm:w-1/2 md:w-1/3 max-w-md sm:max-w-full mb-block-2"
      >
        <div class="px-block-0.5">
          <nuxt-img
            v-if="article.image"
            :src="article.image.replace('?mode=crop&center=0.5,0.5&rnd=132199332150000000&width=575', '')"
            :alt="article.title"
            width="600"
            height="400"
            class="mb-block-0.5"
          />
          <div
            class="mb-4 flex"
          >
            <div
              v-for="(tag, tagIndex) in article.tags.split(',')"
              :key="tagIndex"
              class="py-1.5 px-2.5 mr-2.5 bg-secondary rounded-3xl leading-none text-[12px] uppercase text-black/75 font-bold"
            >
              {{ tag }}
            </div>
          </div>
          <h3 class="text-primary font-bold text-2xl tracking-tight mb-2 hover:underline">
            {{ article.title }}
          </h3>
          <time
            :datetime="article.published"
            class="block text-sm text-dark font-bold mb-2"
          >
            {{ useDayjs(article.published).format('D. M. YYYY') }}
          </time>
          <p class="text-primary font-medium">
            {{ article.perex }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </main>
</template>

<script setup>
import IconClose from '~/assets/img/icon-close.svg';

const articles = ref([]);
const selectedTag = ref(null);

const tags = computed(() => _uniq(articles.value.map(({ tags }) => tags.split(',')).flat()));
const articlesFiltered = computed(() => articles.value.filter((item) => !selectedTag.value || item.tags?.includes(selectedTag.value)));

onMounted(async() => {
  articles.value = await useApi.get(`/items/posts/?sort=-published&lang=${useI18n()?.locale?.value}`)
    .then((res) => res.data)
    .catch(() => []);
});

useCustomHead({
  title: 'Články',
});
</script>
