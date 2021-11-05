<template>
  <main v-if="$store.state.content.members">
    <MembersHero
      class="mb-block-2"
    />

    <div class="container">
      <h2 class="text-primary-dark font-bold text-4xl mb-8">
        Členové
      </h2>
      <div class="flex flex-wrap">
        <div
          v-for="(member, index) in members"
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
  data() {
    return {
      members: [
        {
          fullname: 'Název člena',
          agent: 'Jaroslav Pokorný',
          population: '182 000',
          memberFee: '1 234 Kč / měsíc',
        },
        {
          image: 'https://picsum.photos/seed/picsum/480/480',
          fullname: 'Název člena',
          agent: 'Jaroslav Pokorný',
          population: '182 000',
          memberFee: '1 234 Kč / měsíc',
        },
        {
          image: 'https://picsum.photos/seed/picsum/480/480',
          fullname: 'Název člena',
          agent: 'Jaroslav Pokorný',
          population: '182 000',
          memberFee: '1 234 Kč / měsíc',
        },
        {
          image: 'https://picsum.photos/seed/picsum/480/480',
          fullname: 'Název člena',
          agent: 'Jaroslav Pokorný',
          population: '182 000',
          memberFee: '1 234 Kč / měsíc',
        },
        {
          image: 'https://picsum.photos/seed/picsum/480/480',
          fullname: 'Název člena',
          agent: 'Jaroslav Pokorný',
          population: '182 000',
          memberFee: '1 234 Kč / měsíc',
        },
        {
          image: 'https://picsum.photos/seed/picsum/480/480',
          fullname: 'Název člena',
          agent: 'Jaroslav Pokorný',
          population: '182 000',
          memberFee: '1 234 Kč / měsíc',
        },
      ],
    };
  },
  async fetch() {
    await this.$store.dispatch('content/load', { page: 'members' });
  },
  head() {
    return {
      title: `Členové ${this.$config.appendTitle}`,
    };
  },
};
</script>
