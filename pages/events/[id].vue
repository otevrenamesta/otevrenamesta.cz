<template>
  <main
    v-if="event"
    class="mt-block-4 mb-block-4 max-w-3xl w-10/12 mx-auto [&_table_tr]:align-top [&_table_td]:p-2"
  >
    <div class="flex items-center mb-block-0.5">
      <div
        v-for="(tag, tagIndex) in event.tags.split(',')"
        :key="tagIndex"
        class="py-1.5 px-2.5 mr-2.5 bg-secondary rounded-3xl leading-none text-[12px] uppercase text-black/75 font-bold"
      >
        {{ tag }}
      </div>
    </div>
    <div class="mb-block-0.5">
      <nuxt-img
        :src="event.image"
        :alt="event.title"
        width="1200"
        class="mb-block-0.5"
      />
      <h2 class="text-primary font-bold text-4xl mb-4 tracking-tight">
        {{ event.title }}
      </h2>
      <div class="grid grid-cols-2 gap-4 items-center mt-8">
        <div class="flex items-center">
          <IconCalendar class="w-4 h-4 mr-4" />
          <time
            :datetime="event.date"
            class="block text-sm text-dark"
          >
            {{ event.date }}
          </time>
        </div>

        <div class="flex items-center">
          <IconLocation class="w-4 h-4 mr-4" />
          <span class="text-sm text-dark">
            {{ event.location }}
          </span>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap prose text-lg"
      v-html="$md.render(event.content)"
    />
  </main>
</template>

<script setup>
import IconCalendar from '~/assets/img/icon-calendar.svg';
import IconLocation from '~/assets/img/icon-location.svg';

// Refs
const events = ref([]);

// Computed
const event = computed(() => events.value.find(({ id }) => id === Number(useRoute().params.id)));

// Lifecycle
onMounted(async() => {
  // events.value = await useApi.get(`/items/posts/?lang=${useI18n()?.locale?.value}`)
  //   .then((res) => res.data)
  //   .catch((error) => {
  //     console.error(error);
  //     return [];
  //   });

  events.value = [{
    id: 1,
    title: 'Akce 01',
    tags: 'Tag 01, Tag 02',
    image: 'https://placehold.co/600x400',
    date: '2024-01-01',
    location: 'Brno',
    perex: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }];
});

useCustomHead({
  title: event.value?.title,
});
</script>
