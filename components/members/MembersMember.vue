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
      :src="member.image ? member.image : '/img/member-default-img.svg'"
      :alt="member.fullname"
      class="w-1/2 xs:w-full"
    >
    <a
      :href="member.link"
      :target="member.link ? '_blank' : ''"
      class="block px-block-0.5 w-1/2 xs:w-full xs:mt-4 xs:px-0"
    >
      <h2 class="text-xl font-bold text-primary mb-5">
        {{ member.fullname }}
      </h2>
      <p class="mb-3">
        <span class="text-secondary text-[12px] leading-tight uppercase font-medium block">
          {{ content.labels.agent }}
        </span>
        <strong class="text-sm font-bold text-primary">
          {{ member.agent }}
        </strong>
      </p>
      <p class="mb-3">
        <span class="text-secondary text-[12px] leading-tight uppercase font-medium block">
          {{ content.labels.population }}
        </span>
        <strong class="text-sm font-bold text-primary">
          {{ member.population }}
        </strong>
      </p>
      <p class="mb-3">
        <span class="text-secondary text-[12px] leading-tight uppercase font-medium block">
          {{ content.labels.memberFee }}
        </span>
        <strong class="text-sm font-bold text-primary">
          {{ member.memberFee }}
        </strong>
      </p>
      <p
        v-if="member.shareOfVotes"
        class="mb-3"
      >
        <span class="text-secondary text-[12px] leading-tight uppercase font-medium block">
          {{ content.labels.shareOfVotes }}
        </span>
        <strong class="text-sm font-bold text-primary">
          {{ member.shareOfVotes }}
        </strong>
      </p>
    </a>
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
  computed: {
    content() {
      return useContentStore().members;
    },
  },
};
</script>
