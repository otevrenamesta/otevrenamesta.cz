<template>
  <div class="container flex justify-center flex-wrap gap-block-1">
    <div
      v-for="(milestone, index) in milestones"
      :key="index"
      class="w-full sm:w-1/3 lg:w-1/6 max-w-md"
    >
      <h2 class="text-primary text-3xl font-bold mb-6">
        {{ milestone.number }}
      </h2>
      <strong class="text-secondary text-sm mb-1.5">
        {{ milestone.title }}
      </strong>
      <p class="text-primary-dark text-sm">
        {{ milestone.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      milestones: [
        {
          number: 20,
          title: 'Lorem ipsum',
          description: 'Lorem ipsum je označení pro standardní pseudolatinský text užívaný v grafickém designu.',
        },
        {
          number: 136,
          title: 'Lorem ipsum',
          description: 'Lorem ipsum je označení pro standardní pseudolatinský text užívaný v grafickém designu.',
        },
        {
          number: 3547,
          title: 'Lorem ipsum',
          description: 'Lorem ipsum je označení pro standardní pseudolatinský text užívaný v grafickém designu.',
        },
        {
          number: 136,
          title: 'Lorem ipsum',
          description: 'Lorem ipsum je označení pro standardní pseudolatinský text užívaný v grafickém designu.',
        },
      ],
    };
  },
};
</script>
