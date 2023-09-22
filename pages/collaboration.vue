<template>
  <main v-if="useContentStore().collaboration">
    <CollaborationHero
      class="mb-block-2"
    />

    <CollaborationIntro
      class="mb-block-2"
    />

    <CollaborationSection
      illustration="illustration-collaboration-1"
      class="mb-block-2"
    >
      <div class="max-w-lg">
        <h2 class="text-5xl text-primary font-bold tracking-tight mb-5">
          {{ sections.member?.title }}
        </h2>
        <p
          v-preposition-space
          class="text-secondary text-base font-medium mb-block-1"
          v-html="sections.member?.description"
        />
        <h3 class="text-lg text-priamry uppercase text-primary font-bold mb-5">
          {{ sections.member?.membership?.title }}
        </h3>
        <p
          v-preposition-space
          class="text-sm text-primary mb-block-0.5"
          v-html="sections.member?.membership?.description"
        />
      </div>
      <h3 class="text-lg text-priamry uppercase text-primary font-bold mb-5">
        {{ sections.member?.benefits.title }}
      </h3>
      <div class="flex flex-wrap -mx-block-0.5">
        <div
          v-for="(item, index) in sections.member?.benefits.items"
          :key="index"
          class="w-full sm:w-1/2 max-w-sm"
        >
          <div class="px-block-0.5 mb-block-0.5">
            <strong class="block text-sm font-semibold text-primary text-opacity-75 mb-2.5">
              {{ item.title }}
            </strong>
            <p
              v-preposition-space
              class="text-black text-opacity-60 text-sm font-medium"
              v-html="item.description"
            />
          </div>
        </div>
      </div>
    </CollaborationSection>

    <CollaborationSection
      illustration="illustration-collaboration-2"
      class="mb-block-2"
    >
      <div class="max-w-lg">
        <h2 class="text-5xl text-primary font-bold tracking-tight mb-5">
          {{ sections.services.title }}
        </h2>
        <p
          v-preposition-space
          class="text-secondary text-base font-medium mb-block-0.5"
          v-html="sections.services.description"
        />

        <h3 class="text-lg uppercase text-primary font-bold mb-3">
          {{ sections.services.pricing.title }}
        </h3>
        <p
          v-preposition-space
          class="text-sm text-primary mb-2"
          v-html="sections.services.pricing.description"
        />
        <div class="flex items-center mb-block-0.5">
          <a
            :href="sections.services.pricing.url"
            target="_blank"
          >
            <Button
              type="transparent"
              icon="icon-arrow-right"
              class="text-secondary pl-0"
            >
              {{ sections.services.pricing.title }}
            </Button>
          </a>
        </div>

        <h3 class="text-lg uppercase text-primary font-bold mb-3">
          {{ sections.services.member?.title }}
        </h3>
        <p
          v-if="sections.services.member?.description"
          v-preposition-space
          class="text-sm text-primary mb-2"
          v-html="sections.services.member?.description"
        />
        <div class="flex items-center mb-block-0.5">
          <a
            :href="sections.services.member?.url"
            target="_blank"
          >
            <Button
              type="transparent"
              icon="icon-arrow-right"
              class="text-secondary pl-0"
            >
              {{ sections.services.member?.button }}
            </Button>
          </a>
        </div>
      </div>
      <h3 class="text-lg text-priamry uppercase text-primary font-bold mb-5">
        {{ sections.services.benefits.title }}
      </h3>
      <div class="flex flex-wrap -mx-block-0.5">
        <div
          v-for="(item, index) in sections.services.benefits.items"
          :key="index"
          class="w-full sm:w-1/2 max-w-sm"
        >
          <div class="px-block-0.5 mb-block-0.5">
            <strong class="block text-sm font-semibold text-primary text-opacity-75 mb-2.5">
              {{ item.title }}
            </strong>
            <p
              v-preposition-space
              class="text-black text-opacity-60 text-sm font-medium"
              v-html="item.description"
            />
          </div>
        </div>
      </div>
    </CollaborationSection>

    <CollaborationSection
      illustration="illustration-collaboration-3"
      class="mb-block-2"
    >
      <div class="max-w-lg">
        <h2 class="text-5xl text-primary font-bold tracking-tight mb-5">
          {{ sections.opensource.title }}
        </h2>
        <p
          v-preposition-space
          class="text-secondary text-base font-medium mb-block-1 underline-links"
          v-html="sections.opensource.description"
        />
      </div>
    </CollaborationSection>

    <CollaborationJoinUs
      ref="JoinUs"
      class="mb-block-2"
    />
  </main>
</template>

<script setup>
await useContentStore().load({ page: 'collaboration' });

useCustomHead({
  title: useContentStore().collaboration?.hero?.title,
});

// Refs
const JoinUs = ref(null);

// Computed
const sections = computed(() => useContentStore().collaboration.sections);

// Watch
watch(() => useContentStore().collaboration, () => {
  nextTick(() => {
    if (route.hash === '#form') {
      const top = JoinUs.value?.$el?.getBoundingClientRect().top || 0;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
</script>
