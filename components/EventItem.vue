<template>
  <nuxt-link
    :to="$localePath(`/events/${props.event.id}`)"
    class="block w-full sm:w-1/2 md:w-1/3 max-w-md sm:max-w-full mb-block-2"
  >
    <div class="px-block-0.5">
      <nuxt-img
        v-if="props.event.image"
        :src="props.event.image.replace('?mode=crop&center=0.5,0.5&rnd=132199332150000000&width=575', '')"
        :alt="props.event?.translations?.[0]?.title"
        width="600"
        height="400"
        class="mb-block-0.5"
      />
      <div
        class="mb-4 flex"
      >
        <div
          v-for="(tag, tagIndex) in props.event.tags?.split(',')"
          :key="tagIndex"
          class="py-1.5 px-2.5 mr-2.5 bg-secondary rounded-3xl leading-none text-[12px] uppercase text-black/75 font-bold"
        >
          {{ tag }}
        </div>
      </div>
      <h3 class="text-primary font-bold text-2xl tracking-tight mb-2 hover:underline">
        {{ props.event?.translations?.[0]?.title }}
      </h3>
      <p class="text-primary font-medium">
        {{ props.event?.translations?.[0]?.perex }}
      </p>

      <div class="grid grid-cols-2 gap-4 items-center mt-8">
        <div class="flex items-center">
          <IconCalendar class="w-4 h-4 mr-4" />
          <time
            :datetime="props.event.begin"
            class="block text-sm text-dark"
          >
            {{ useDayjs(props.event.begin).format('D. M. YYYY') }}
          </time>
        </div>

        <div class="flex items-center">
          <IconLocation class="w-4 h-4 mr-4" />
          <span class="text-sm text-dark">
            {{ props.event.location }}
          </span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
import IconCalendar from '~/assets/img/icon-calendar.svg';
import IconLocation from '~/assets/img/icon-location.svg';

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>
