<template>
  <section class="Hero flex items-end h-dvh min-h-[700px]">
    <div class="container flex items-end justify-end relative h-full">
      <div class="HeroBox bg-primary pt-10 s:pt-12 sm:pt-20 pb-10 sm:pb-14 pl-10 s:pl-12 sm:pl-16 w-10/12 sm:w-auto md:pr-14">
        <h2
          class="text-4xl s:text-5xl sm:text-6xl text-white font-bold mb-9 xs:mb-0 tracking-tight"
          v-html="hero.title"
        />
        <p class="text-md sm:text-lg text-white max-w-sm xs:hidden">
          {{ hero.description }}
        </p>
        <nuxt-link
          :to="`${$localePath(`/collaboration`)}#form`"
          class="block mt-block-0.5"
        >
          <Button
            type="transparent"
            icon="icon-arrow-right"
            class="text-secondary px-0"
          >
            {{ hero.cta }}
          </Button>
        </nuxt-link>
      </div>

      <div class="HeroBg mb-block-1" />
      <div
        class="w-block-1 sm:w-block-2 h-block-1 sm:h-block-2 absolute -bottom-block-2 -left-block-2 flex flex-wrap"
      >
        <div class="w-1/2 h-1/2 bg-additional" />
        <div class="w-1/2 h-1/2 bg-additional" />
        <div class="w-1/2 h-1/2 bg-transparent" />
        <div class="w-1/2 h-1/2 bg-additional" />
      </div>

      <div
        class="w-block-2 md:w-block-4 h-block-2 md:h-block-4 bg-additional absolute bottom-block-4 sm:bottom-block-2 -right-block-1 sm:-right-block-4 rounded-full"
      />
    </div>
    <Socials
      class="absolute bottom-3 right-8 z-10 hidden lg:flex"
    />
  </section>
</template>

<script>
export default {
  computed: {
    hero() {
      return useContentStore().homepage.hero;
    },
  },
};
</script>

<style scoped>
@reference '~/assets/css/tailwind.css';

.HeroBox {
  position: absolute;
  left: 0;
  z-index: 12;

  &::before,
  &::after {
    @apply bg-primary;
    position: absolute;
    content: '';
    bottom: 0;
    width: var(--block-size);

    @media (width >= theme(--breakpoint-md)) {
      width: calc(var(--block-size) * 2);
    }
  }
  &::before {
    right: calc(var(--block-size) * -0.95);
    height: calc(100% - var(--block-size) * 0.95);

    @media (width >= theme(--breakpoint-md)) {
      right: calc(var(--block-size) * -1.95);
      height: calc(100% - var(--block-size) * 1.95);
    }
  }
  &::after {
    right: calc(var(--block-size) * -1.9);
    height: calc(100% - var(--block-size) * 1.9);

    @media (width >= theme(--breakpoint-md)) {
      right: calc(var(--block-size) * -3.9);
      height: calc(100% - var(--block-size) * 3.9);
    }
  }
}

.HeroBg {
  position: relative;
  width: 90%;
  height: 75%;
  background: url(~/assets/img/homepage-hero-bg.jpg);
  background-size: cover;
  margin-right: 5%;

  @media (width >= theme(--breakpoint-md)) {
    width: 75%;
  }

  &:before {
    @apply bg-additional;
    content: '';
    width: var(--block-size);
    height: calc(var(--block-size) * 4);
    position: absolute;
    left: calc(var(--block-size) * -1);
    top: 25%;
  }

  &:after {
    @apply bg-secondary;
    content: '';
    width: calc(var(--block-size) * 2);
    height: calc(var(--block-size) * 2);
    right: calc(var(--block-size) * -1);
    position: absolute;
    top: 5%;
    border-top-left-radius: 97%;

    @media (width >= theme(--breakpoint-md)) {
      width: calc(var(--block-size) * 4);
      height: calc(var(--block-size) * 4);
      right: calc(var(--block-size) * -2);
    }
  }
}
</style>
