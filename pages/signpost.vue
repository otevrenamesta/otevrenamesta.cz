<template>
  <div class="Conference relative min-h-dvh overflow-x-hidden bg-white">
    <!-- Decorative blocks -->
    <div
      class="absolute top-0 right-0 w-block-4 md:w-block-6 h-block-4 md:h-block-6 flex flex-wrap pointer-events-none"
      aria-hidden="true"
    >
      <div class="w-1/3 h-1/3" />
      <div class="w-1/3 h-1/3 bg-additional" />
      <div class="w-1/3 h-1/3 bg-additional rounded-bl-full" />
      <div class="w-1/3 h-1/3" />
      <div class="w-1/3 h-1/3 bg-secondary rounded-tl-full" />
      <div class="w-1/3 h-1/3 bg-primary" />
      <div class="w-1/3 h-1/3" />
      <div class="w-1/3 h-1/3" />
      <div class="w-1/3 h-1/3 bg-primary-light rounded-br-full" />
    </div>
    <div
      class="absolute bottom-block-2 -left-block-1 w-block-2 md:w-block-3 h-block-2 md:h-block-3 bg-secondary rounded-full pointer-events-none"
      aria-hidden="true"
    />

    <main class="container relative z-10 pt-block-1 pb-block-2">
      <div class="flex flex-col md:flex-row md:items-start gap-8 md:gap-block-1">
        <nuxt-link
          to="/en"
          class="inline-block shrink-0 md:pt-2"
        >
          <LogoOm class="w-36 md:w-44 h-auto" />
        </nuxt-link>

        <header class="max-w-3xl md:border-l md:border-secondary md:pl-block-1">
          <h1 class="text-primary font-bold text-4xl s:text-5xl md:text-6xl tracking-tight">
            {{ conference.title }}
          </h1>
          <p class="mt-4 text-lg text-gray max-w-xl">
            {{ conference.description }}
          </p>
        </header>
      </div>

      <ul class="mt-block-1 mx-auto max-w-xl flex flex-col gap-4">
        <li
          v-for="(link, index) in links"
          :key="index"
        >
          <a
            :href="link.url"
            target="_blank"
            rel="noopener"
            class="group relative flex items-center gap-4 overflow-hidden bg-white border border-primary-light hover:border-primary transition py-5 pl-6 pr-14"
          >
            <span
              class="absolute top-0 right-0 w-8 h-8 rounded-bl-full transition group-hover:w-10 group-hover:h-10"
              :class="accents[index % accents.length]"
              aria-hidden="true"
            />
            <span class="flex flex-col flex-1">
              <strong class="text-primary text-xl font-bold tracking-tight">
                {{ link.label }}
              </strong>
              <span
                v-if="link.description"
                class="mt-1 text-sm text-gray"
              >
                {{ link.description }}
              </span>
            </span>
            <IconArrowOpen class="shrink-0 text-primary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import LogoOm from '~/assets/img/logo-om.svg';
import IconArrowOpen from '~/assets/img/icon-arrow-open.svg';

definePageMeta({
  layout: false,
});

useCustomHead({
  title: 'Conference',
});

// TODO: replace dummy data
const conference = {
  title: 'Open Cities at the conference',
  description: 'A signpost to everything we talked about.',
};

const links = [
  { label: 'Open Open', description: 'Visit the conference website.', url: 'https://openopen.cz' },
  { label: 'Open Cities', description: 'Who we are and how to join us.', url: 'https://otevrenamesta.cz/en' },
  { label: 'Open Cities Products', description: 'Check projects run by Open Cities', url: 'https://otevrenamesta.cz/en/projects' },
  { label: 'Czech Ospo', description: 'Visit Czech OSPO site', url: 'https://czechospo.cz' },
  { label: 'Contact us', description: 'Get in touch, we are happy to talk.', url: 'https://otevrenamesta.cz/en/contact' },
];

const accents = ['bg-secondary', 'bg-additional', 'bg-primary', 'bg-primary-light'];
</script>

<style scoped>
@reference '~/assets/css/tailwind.css';

.Conference::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.5;
  background-image:
    linear-gradient(to right, #dddbfd 1px, transparent 1px),
    linear-gradient(to bottom, #dddbfd 1px, transparent 1px);
  background-size: calc(var(--block-size) * 2) calc(var(--block-size) * 2);
  mask-image: linear-gradient(to bottom, black, transparent 70%);
}
</style>
