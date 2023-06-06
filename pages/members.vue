<template>
  <main
    v-if="useContentStore().members"
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
          v-for="(member, index) in useContentStore().members.members"
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

<script setup>
await useContentStore().load({ page: 'members' });

useCustomHead({
  title: useContentStore().members?.hero?.title,
});
</script>
