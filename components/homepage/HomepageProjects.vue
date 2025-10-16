<template>
  <section>
    <div class="container">
      <h2 class="text-primary font-bold text-4xl mb-4 tracking-tight">
        {{ useContentStore().homepage.projects.title }}
      </h2>
      <div class="text-base text-gray mb-4 max-w-[30rem]">
        {{ useContentStore().homepage.projects.description }}
      </div>
      <nuxt-link
        :to="$localePath('/projects')"
        class="block mb-block-1 xs:mb-block-0.5"
      >
        <Button
          type="transparent"
          icon="icon-arrow-right"
          class="text-secondary px-0"
        >
          {{ useContentStore().homepage.projects.all }}
        </Button>
      </nuxt-link>
    </div>

    <section class="container relative mb-block-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 border-l border-t border-primary-light [&>*]:border-r [&>*]:border-b [&>*]:border-primary-light">
        <ProjectsProject
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>
    </section>
  </section>
</template>

<script setup>
import { useGrid } from 'vue-screen';

const projects = ref([]);
const grid = useGrid('tailwind');

// Computed
const gridRows = computed(() => {
  let projectsPerLine = 1;

  if (grid.md) {
    projectsPerLine = 2;
  }

  if (grid.lg) {
    projectsPerLine = 3;
  }

  const projectsLines = Math.ceil(projects.value.length / projectsPerLine);

  return (projectsLines * 7) + 1;
});

onMounted(async() => {
  projects.value = await useApi.get(`/items/projects?limit=25&fields[]=id&fields[]=title&fields[]=state&fields[]=subtitle&fields[]=illustration&sort[]=id&page=1&deep={"translations":{"_filter":{"languages_code":{"_eq":"${useI18n()?.locale?.value}"}}}}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
});
</script>
