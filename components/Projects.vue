<template>
  <section class="container">
    <div class="flex flex-col justify-start items-start">
      <ProjectsProject
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
        :align="index % 2 === 0 ? 'left' : 'right'"
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
