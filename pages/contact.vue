<template>
  <main v-if="useContentStore().contact">
    <ContactHero
      class="mb-block-2"
    />

    <div class="container">
      <h2 class="text-primary-dark font-bold text-4xl mb-5">
        {{ leadership.title }}
      </h2>
      <strong class="block text-sm text-secondary">
        {{ leadership.subtitle }}
      </strong>
      <a
        :href="`mailto:${leadership.email}`"
        class="text-primary text-sm block mb-block-0.5 hover:underline"
      >
        {{ leadership.email }}
      </a>
      <div class="flex flex-wrap -mx-6 md:-mx-block-0.5">
        <div
          v-for="(person, index) in useContentStore().global.leaderships"
          :key="index"
          class="px-6 md:px-block-0.5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <Person
            :person="person"
            class="text-primary-dark mb-block-1"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
await useContentStore().load({ page: 'contact' });

useCustomHead({
  title: useContentStore().contact?.hero?.title,
});

// Computed
const leadership = computed(() => useContentStore().contact?.leadership);
</script>
