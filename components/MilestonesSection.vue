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
      if (!member.population) return acc;

      try {
        const populationText = member.population.split('(')[0] || member.population;
        const populationNumber = Number(populationText.replace(/ /g, ''));
        return isNaN(populationNumber) ? acc : acc + populationNumber;
      } catch {
        console.error('Error parsing population for member:', member.id);
        return acc;
      }
    }, 0);
  }

  if (id === 'projects') {
    return projects.value.length;
  }

  if (id === 'budget') {
    return members.reduce((acc, member) => {
      if (!member.memberFee) return acc;

      try {
        const budgetText = member.memberFee.split(' Kč')[0] || member.memberFee;
        const memberBudget = Number(budgetText.replace(/\D/g, ''));
        return isNaN(memberBudget) ? acc : acc + memberBudget;
      } catch {
        console.error('Error parsing budget for member:', member.id);
        return acc;
      }
    }, 0);
  }

  return 0;
};
</script>
