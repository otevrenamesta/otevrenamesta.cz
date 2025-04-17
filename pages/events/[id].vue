<template>
  <main
    v-if="event"
    class="mt-block-4 mb-block-4 max-w-3xl w-10/12 mx-auto [&_table_tr]:align-top [&_table_td]:p-2"
  >
    <div class="flex items-center mb-block-0.5">
      <div
        v-for="(tag, tagIndex) in event.tags"
        :key="tagIndex"
        class="py-1.5 px-2.5 mr-2.5 bg-secondary rounded-3xl leading-none text-[12px] uppercase text-black/75 font-bold"
      >
        {{ tag }}
      </div>
    </div>
    <div class="mb-block-0.5">
      <nuxt-img
        :src="`${useRuntimeConfig().public.assetsUrl}/${event.image}`"
        :alt="event?.translations?.[0]?.title"
        width="1200"
        class="mb-block-0.5"
      />
      <h2 class="text-primary font-bold text-4xl mb-4 tracking-tight">
        {{ event?.translations?.[0]?.title }}
      </h2>
      <div class="grid grid-cols-2 gap-4 items-center mt-8">
        <div class="flex items-center">
          <IconCalendar class="w-4 h-4 mr-4" />
          <time
            :datetime="event.begin"
            class="block text-sm text-dark"
          >
            {{ useDayjs(event.begin).format('D. M. YYYY') }}
          </time>
        </div>

        <div class="flex items-center">
          <IconLocation class="w-4 h-4 mr-4" />
          <span class="text-sm text-dark">
            {{ event?.location }}
          </span>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap prose text-lg"
      v-html="$md.render(event?.translations?.[0]?.content)"
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
  events.value = await useApi.get(`/items/events/?&filter={"id":{"_eq":"${useRoute().params.id}"}}&deep[translations][_filter][languages_code][_eq]=${useI18n()?.locale?.value}&fields=*,translations.*&limit=1`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      return [];
    });

  if (!event.value) {
    return navigateTo('/events');
  }
});

useCustomHead({
  title: event.value?.translations?.[0]?.title,
});
</script>
