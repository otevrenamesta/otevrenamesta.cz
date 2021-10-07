<template>
  <div class="flex items-center">
    <nuxt-img
      :src="member.image"
      class="w-1/2"
    />
    <div class="px-block-0.5 w-1/2">
      <h2 class="text-xl font-bold text-primary mb-5">
        {{ member.fullname }}
      </h2>
      <p class="mb-4">
        <span class="text-secondary text-[12px] uppercase">
          Zástupce
        </span>
        <br>
        <strong class="text-sm font-bold">
          {{ member.agent }}
        </strong>
      </p>
      <p class="mb-4">
        <span class="text-secondary text-[12px] uppercase">
          Počet obyvatel
        </span>
        <br>
        <strong class="text-sm font-bold">
          {{ member.population }}
        </strong>
      </p>
      <p class="mb-4">
        <span class="text-secondary text-[12px] uppercase">
          Členský poplatek
        </span>
        <br>
        <strong class="text-sm font-bold">
          {{ member.memberFee }}
        </strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
};
</script>
