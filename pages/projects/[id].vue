<template>
  <div
    v-if="project"
    class="container pt-block-3 max-w-[1300px]!"
  >
    <div class="mb-5">
      <nuxt-link
        :to="$localePath('/projects')"
        class="text-gray flex items-center gap-2.5 hover:underline"
      >
        <IconArrowLeftLink />
        {{ useContentStore().homepage.projects.all }}
      </nuxt-link>
    </div>

    <div class="border border-primary-light">
      <ProjectDetailHero
        :project="project"
      />

      <div class="flex -mt-px border-t border-b border-primary-light flex-col lg:flex-row">
        <div class="w-full lg:w-8/12 lg:border-r border-primary-light">
          <ProjectDetailIntro
            :project="project"
            class="max-w-3xl"
          />
          <ProjectDetailContent
            :project="project"
            class="pt-block-1 max-w-3xl"
          />
        </div>
        <div class="border-t border-primary-light lg:w-4/12 lg:border-none">
          <ProjectDetailTimeline
            :project="project"
          />
          <!-- <ProjectDetailFunctions
            :project="project"
            class="w-11/12 lg:w-block-6 max-w-full mx-auto"
          /> -->
          <!-- <div
            class="w-full border-b border-primary-light"
          /> -->
          <div
            class="w-full border-b border-primary-light"
          />
          <ProjectDetailUsers
            :project="project"
          />
          <div
            class="w-full border-b border-primary-light"
          />
          <ProjectDetailPartners
            :project="project"
          />
          <div
            class="w-full border-b border-primary-light"
          />
          <ProjectDetailGallery
            :project="project"
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
  </div>
</template>

<script setup>
import IconArrowLeftLink from '~/assets/img/icon-arrow-left-link.svg';

await useContentStore().load({ page: 'project' });

// Refs
const project = ref(null);

// Lifecycle
onMounted(async() => {
  const projects = await useApi.get(`/items/projects?filter={"id":{"_eq":${Number(useRoute().params.id)}}}&deep={"translations":{"_filter":{"languages_code":{"_eq":"${useI18n()?.locale?.value}"}}}}`)
    .catch((error) => {
      console.error(error);

      return { data: [] };
    });

  project.value = projects.data.find(({ id }) => id === Number(useRoute().params.id));

  useCustomHead({
    title: project.value?.title,
    description: project.value?.description,
  });
});
</script>
