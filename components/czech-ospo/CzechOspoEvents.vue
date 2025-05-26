<template>
  <section
    v-if="eventsFiltered.length"
    class="container pt-block-2"
  >
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
const events = ref([]);

// Computed
const content = computed(() => useContentStore().czechOspo.events);
const eventsFiltered = computed(() => events.value.filter(({ tags }) => tags.includes('ospo') || tags.includes('OSPO')));

// Lifecycle
onMounted(async() => {
  events.value = await useApi.get(`/items/events/?sort=+begin&filter={"begin":{"_gte":"$NOW"}}&deep[translations][_filter][languages_code][_eq]=${useI18n()?.locale?.value}&fields=*,translations.*`)
    .then((res) => res.data)
    .catch(() => []);
});
</script>
