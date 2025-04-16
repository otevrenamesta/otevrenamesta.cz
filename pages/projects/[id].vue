<template>
  <div v-if="project">
    <ProjectDetailHero
      :project="project"
    />

    <div class="flex -mt-px border-t border-b border-primary-light flex-col lg:flex-row">
      <div class="w-full lg:w-8/12 lg:border-r border-primary-light">
        <ProjectDetailIntro
          :project="project"
          class="w-11/12 lg:w-block-12 max-w-full mx-auto pt-block-2"
        />
        <div
          class="w-full border-b border-primary-light"
        />
        <ProjectDetailContent
          :project="project"
          class="w-11/12 lg:w-block-12 max-w-full mx-auto pt-block-1"
        />
        <div
          class="w-full border-b border-primary-light"
        />
        <ProjectDetailTimeline
          :project="project"
          class="w-11/12 lg:w-block-12 max-w-full mx-auto pt-block-1"
        />
      </div>
      <div class="border-t border-primary-light lg:w-4/12 lg:border-none">
        <ProjectDetailFunctions
          :project="project"
          class="w-11/12 lg:w-block-6 max-w-full mx-auto"
        />
        <div
          class="w-full border-b border-primary-light"
        />
        <ProjectDetailUsers
          :project="project"
          class="w-11/12 lg:w-block-6 max-w-full mx-auto"
        />
        <div
          class="w-full border-b border-primary-light"
        />
        <ProjectDetailPartners
          :project="project"
          class="w-11/12 lg:w-block-6 max-w-full mx-auto"
        />
        <div
          class="w-full border-b border-primary-light"
        />
        <ProjectDetailGallery
          :project="project"
          class="w-11/12 lg:w-block-6 max-w-full mx-auto"
        />
      </div>
    </div>

    <ProjectDetailTesting
      :project="project"
    />

    <ProjectDetailCta
      :project="project"
    />
  </div>
</template>

<script setup>
await useContentStore().load({ page: 'project' });

useCustomHead({
  title: useContentStore().project?.hero?.title,
});

// Refs
const project = ref(null);

// Lifecycle
onMounted(async() => {
  const projects = await useApi.get(`/items/projects?filter={"id":{"_eq":${Number(useRoute().params.id)}}}&deep={"translations":{"_filter":{"languages_code":{"_eq":"${useI18n()?.locale?.value}"}}}}`).catch((error) => {
    console.error(error);

    return { data: [] };
  });

  project.value = projects.data.find(({ id }) => id === Number(useRoute().params.id));
});
</script>
