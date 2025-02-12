<template>
  <main
    v-if="useContentStore().events"
    class="mt-block-3 md:mt-block-4 container"
  >
    <div>
      <h2 class="text-primary font-bold text-4xl mb-block-0.5 md:mb-block-1 tracking-tight">
        {{ useContentStore().events?.hero?.title }}
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
        v-for="(event, index) in eventsFiltered"
        :key="index"
        :to="$localePath(`/events/${event.id}`)"
        class="block w-full sm:w-1/2 md:w-1/3 max-w-md sm:max-w-full mb-block-2"
      >
        <div class="px-block-0.5">
          <nuxt-img
            :src="event.image.replace('?mode=crop&center=0.5,0.5&rnd=132199332150000000&width=575', '')"
            :alt="event.title"
            width="600"
            height="400"
            class="mb-block-0.5"
          />
          <div
            class="mb-4 flex"
          >
            <div
              v-for="(tag, tagIndex) in event.tags?.split(',')"
              :key="tagIndex"
              class="py-1.5 px-2.5 mr-2.5 bg-secondary rounded-3xl leading-none text-[12px] uppercase text-black/75 font-bold"
            >
              {{ tag }}
            </div>
          </div>
          <h3 class="text-primary font-bold text-2xl tracking-tight mb-2 hover:underline">
            {{ event.title }}
          </h3>
          <p class="text-primary font-medium">
            {{ event.perex }}
          </p>

          <div>
            <time
              :datetime="event.date"
              class="block text-sm text-dark font-bold mb-2"
            >
              {{ useDayjs(event.date).format('D. M. YYYY') }}
            </time>

            <div>
              {{ event.location }}
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </main>
</template>

<script setup>
import IconClose from '~/assets/img/icon-close.svg';

await useContentStore().load({ page: 'events' });

useCustomHead({
  title: useContentStore().events?.hero?.title,
});

// Refs
const selectedTag = ref(null);
const events = ref([
  {
    title: 'Akce 01',
    tags: 'Tag 01, Tag 02',
    image: 'https://placehold.co/600x400',
    date: '2024-01-01',
    location: 'Brno',
    perex: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

]);

// Computed
const tags = computed(() => ['Tag 01', 'Tag 02', 'Tag 03']);
const eventsFiltered = computed(() => events.value.filter(({ tags }) => !selectedTag.value || tags.includes(selectedTag.value)));
</script>
