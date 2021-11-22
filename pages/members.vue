<template>
  <main
    v-if="$store.state.content.members"
    class="overflow-x-hidden"
  >
    <MembersHero
      class="mb-block-2"
    />

    <div class="container">
      <h2 class="text-primary-dark font-bold text-4xl mb-8">
        Členové
      </h2>
      <div class="flex flex-wrap">
        <div
          v-for="(member, index) in $store.state.content.members.members"
          :key="index"
          class="w-full md:w-1/2 xl:w-1/3"
        >
          <MembersMember
            :member="member"
            class="mb-block-1"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('content/load', { page: 'members' });
  },
  head() {
    return {
      title: `${this.$store.state.content.members?.hero?.title} ${this.$config.appendTitle}`,
    };
  },
};
</script>
