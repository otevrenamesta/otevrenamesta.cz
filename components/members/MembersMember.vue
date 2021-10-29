<template>
  <div class="flex items-center xs:flex-col">
    <nuxt-img
      v-if="member.image"
      :src="member.image"
      :alt="member.fullname"
      class="w-1/2 xs:w-full"
    />
    <img
      v-else
      src="~/assets/img/member-default-img.svg"
      :alt="member.fullname"
      class="w-1/2 xs:w-full"
    >
    <div class="px-block-0.5 w-1/2 xs:w-full xs:mt-4 xs:px-0">
      <h2 class="text-2xl font-bold text-primary mb-5">
        {{ member.fullname }}
      </h2>
      <p class="mb-4">
        <span class="text-secondary text-[12px] uppercase font-medium block">
          Zástupce
        </span>
        <strong class="text-sm font-bold text-primary">
          {{ member.agent }}
        </strong>
      </p>
      <p class="mb-4">
        <span class="text-secondary text-[12px] uppercase font-medium block">
          Počet obyvatel
        </span>
        <strong class="text-sm font-bold text-primary">
          {{ member.population }}
        </strong>
      </p>
      <p class="mb-4">
        <span class="text-secondary text-[12px] uppercase font-medium block">
          Členský poplatek
        </span>
        <strong class="text-sm font-bold text-primary">
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
