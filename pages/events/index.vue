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
    <div
      v-if="eventsFiltered.length || isLoading"
      class="flex items-center flex-wrap mb-block-1 sm:mb-block-2"
    >
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

    <div
      v-if="eventsFiltered.length || isLoading"
      class="flex flex-wrap -mx-block-0.5"
    >
      <EventItem
        v-for="event in eventsFiltered"
        :key="event.id"
        :event="event"
      />
    </div>
    <div v-else>
      {{ useContentStore().events?.emptyState }}
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
const events = ref([]);
const isLoading = ref(false);
// Computed
const tags = computed(() => _uniq(events.value.map(({ tags }) => tags).flat()));
const eventsFiltered = computed(() => events.value.filter((event) => !selectedTag.value || event.tags?.includes(selectedTag.value)));

// Lifecycle
onMounted(async() => {
  isLoading.value = true;
  const filter = {
    status: "published"
  };
  events.value = await useApi.get(`/items/events/?sort=+begin&filter=${JSON.stringify(filter)}&deep[translations][_filter][languages_code][_eq]=${useI18n()?.locale?.value}&fields=*,translations.*`)
    .then((res) => res.data)
    .catch(() => []);
  isLoading.value = false;
});
</script>
