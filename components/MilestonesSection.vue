<template>
  <div class="container flex justify-center flex-wrap gap-block-1">
    <div
      v-for="(milestone, index) in milestones"
      :key="index"
      class="w-full sm:w-1/3 lg:w-1/6 max-w-md"
    >
      <h2 class="text-primary text-3xl font-bold mb-2 sm:mb-6">
        {{ $n(getNumber(milestone.id)) }}
      </h2>
      <strong class="text-secondary text-sm mb-1.5">
        {{ milestone.title }}
      </strong>
      <p
        v-preposition-space
        class="text-primary-dark text-sm"
      >
        {{ milestone.description?.replaceAll('{number}', $n(getNumber(milestone.id))) }}
      </p>
    </div>
  </div>
</template>

<script setup>
await useContentStore().load({ page: 'members' });

const projects = ref([]);

const milestones = computed(() => useContentStore().global.milestones);

onMounted(async() => {
  projects.value = await useApi.get(`/items/projects?limit=25&fields[]=id&page=1&lang=${useI18n()?.locale?.value}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
});

const getNumber = (id) => {
  const members = useContentStore().members.members;

  if (id === 'members') {
    return members.length;
  }

  if (id === 'citizens') {
    return members.reduce((acc, member) => {
      const populationNumberSplitBeforeBracket = Number(member.population.split('(')[0].replaceAll(' ', ''));
      return acc + populationNumberSplitBeforeBracket;
    }, 0);
  }

  if (id === 'projects') {
    return projects.value.length;
  }

  if (id === 'budget') {
    return members.reduce((acc, member) => {
      const memberBudget = Number(member.memberFee.split(' Kč')[0].replaceAll(' ', ''));
      return acc + memberBudget;
    }, 0);
  }

  return 0;
};
</script>
