<template>
  <section class="container">
    <h2 class="text-primary-dark font-bold text-4xl mb-8">
      Členové výboru
    </h2>
    <div class="flex flex-wrap -mx-block-0.5">
      <div
        v-for="(perosn, index) in leaderships"
        :key="index"
        class="px-block-0.5 w-1/5"
      >
        <Person
          :person="perosn"
          class="text-primary-dark mb-block-1"
        />
      </div>
    </div>

    <h2 class="text-secondary font-bold text-4xl mb-8 mt-block-1.5">
      Projektová rada
    </h2>
    <div class="flex flex-wrap -mx-block-0.5">
      <div
        v-for="(perosn, index) in employees"
        :key="index"
        class="px-block-0.5 w-1/5"
      >
        <Person
          :person="perosn"
          class="text-secondary mb-block-1"
        />
      </div>
    </div>
  </section>
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

      employees: [
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
};
</script>
