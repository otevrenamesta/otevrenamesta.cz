<template>
  <main>
    <MembersHero
      class="mb-block-2"
    />

    <div class="container">
      <h2 class="text-primary-dark font-bold text-4xl mb-8">
        Členové
      </h2>
      <div class="flex flex-wrap -mx-block-1">
        <div
          v-for="(member, index) in members"
          :key="index"
          class="w-1/3"
        >
          <MembersMember
            :member="member"
            class="px-block-1 mb-block-1"
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
  head() {
    return {
      title: `Členové ${this.$config.appendTitle}`,
    };
  },
};
</script>
