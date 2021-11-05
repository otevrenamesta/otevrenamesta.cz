<template>
  <main>
    <ContactHero
      class="mb-block-2"
    />

    <div class="container">
      <h2 class="text-primary-dark font-bold text-4xl mb-5">
        Členové výboru
      </h2>
      <strong class="block text-sm text-secondary">
        Obecný kontakt na výbor
      </strong>
      <a href="mailto:vybor@otevrenamesta.cz" class="text-primary text-sm block mb-block-0.5 hover:underline">
        vybor@otevrenamesta.cz
      </a>
      <div class="flex flex-wrap -mx-6 md:-mx-block-0.5">
        <div
          v-for="(perosn, index) in leaderships"
          :key="index"
          class="px-6 md:px-block-0.5 w-1/2 xs:w-full md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <Person
            :person="perosn"
            class="text-primary-dark mb-block-1"
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
      leaderships: [
        {
          img: 'https://picsum.photos/seed/picsum/480/480',
          fullname: 'Jaroslav Pokorný',
          subtitle: 'Datový analytik',
          description: 'Lorem ipsum je označení pro standardní pseudolatinský text užívaný v grafickém designu.',
          email: 'pokorny@otevrenamesta.cz',
          phone: '+420 773 747 784',
          facebook: 'http://facebook.com/',
          instagram: 'http://instagram.com/',
          linkedin: 'http://linkedin.com/',
          twitter: 'http://twitter.com/',
        },
        {
          img: 'https://picsum.photos/seed/picsum/480/480',
          fullname: 'Jaroslav Pokorný',
          subtitle: 'Datový analytik',
          description: 'Lorem ipsum je označení pro standardní pseudolatinský text užívaný v grafickém designu.',
          email: 'pokorny@otevrenamesta.cz',
          phone: '+420 773 747 784',
          facebook: 'http://facebook.com/',
          instagram: 'http://instagram.com/',
          linkedin: 'http://linkedin.com/',
          twitter: 'http://twitter.com/',
        },
        {
          img: 'https://picsum.photos/seed/picsum/480/480',
          fullname: 'Jaroslav Pokorný',
          subtitle: 'Datový analytik',
          description: 'Lorem ipsum je označení pro standardní pseudolatinský text užívaný v grafickém designu.',
          email: 'pokorny@otevrenamesta.cz',
          phone: '+420 773 747 784',
          facebook: 'http://facebook.com/',
          instagram: 'http://instagram.com/',
          linkedin: 'http://linkedin.com/',
          twitter: 'http://twitter.com/',
        },
        {
          img: 'https://picsum.photos/seed/picsum/480/480',
          fullname: 'Jaroslav Pokorný',
          subtitle: 'Datový analytik',
          description: 'Lorem ipsum je označení pro standardní pseudolatinský text užívaný v grafickém designu.',
          email: 'pokorny@otevrenamesta.cz',
          phone: '+420 773 747 784',
          facebook: 'http://facebook.com/',
          instagram: 'http://instagram.com/',
          linkedin: 'http://linkedin.com/',
          twitter: 'http://twitter.com/',
        },
        {
          img: 'https://picsum.photos/seed/picsum/480/480',
          fullname: 'Jaroslav Pokorný',
          subtitle: 'Datový analytik',
          description: 'Lorem ipsum je označení pro standardní pseudolatinský text užívaný v grafickém designu.',
          email: 'pokorny@otevrenamesta.cz',
          phone: '+420 773 747 784',
          facebook: 'http://facebook.com/',
          instagram: 'http://instagram.com/',
          linkedin: 'http://linkedin.com/',
          twitter: 'http://twitter.com/',
        },
      ],
    };
  },

  async fetch() {
    await this.$store.dispatch('content/load', { page: 'contact' });
  },

  head() {
    return {
      title: `Kontakt ${this.$config.appendTitle}`,
    };
  },
};
</script>
