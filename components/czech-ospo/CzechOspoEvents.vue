<template>
  <section class="container pt-block-2">
    <h3 class="uppercase text-primary text-xl font-bold mb-2">
      {{ content?.title }}
    </h3>
    <nuxt-link
      :to="$localePath('/events')"
      class="block mb-block-0.5"
    >
      <Button
        type="transparent"
        icon="icon-arrow-right"
        class="text-secondary"
      >
        {{ content?.allEvents }}
      </Button>
    </nuxt-link>

    <div class="flex flex-wrap -mx-block-0.5">
      <EventItem
        v-for="event in eventsFiltered"
        :key="event.id"
        :event="event"
      />
    </div>
  </section>
</template>

<script setup>
// Refs
const events = ref([
  {
    id: 1,
    title: 'Akce 01',
    tags: 'Tag 01, Tag 02',
    image: 'https://placehold.co/600x400',
    date: '2024-01-01',
    location: 'Brno',
    perex: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]);

// Computed
const content = computed(() => useContentStore().czechOspo.events);
const eventsFiltered = computed(() => events.value);
</script>
