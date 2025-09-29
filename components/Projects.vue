<template>
  <section class="container">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 border-l border-t border-primary-light [&>*]:border-r [&>*]:border-b [&>*]:border-primary-light">
      <ProjectsProject
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup>
const projects = ref([]);

onMounted(async() => {
  projects.value = await useApi.get(`/items/projects?limit=25&fields[]=id&fields[]=title&fields[]=state&fields[]=subtitle&fields[]=illustration&sort[]=id&page=1&deep={"translations":{"_filter":{"languages_code":{"_eq":"${useI18n()?.locale?.value}"}}}}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
});
</script>
