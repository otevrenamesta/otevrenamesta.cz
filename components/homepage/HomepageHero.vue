<template>
  <section class="Hero flex items-end h-screen min-h-[700px]">
    <div class="container flex items-end justify-end relative h-full">
      <div class="HeroBox bg-primary pt-20 pb-14 px-16">
        <h2
          class="text-6xl text-white font-bold mb-9 tracking-tight"
          v-html="hero.title"
        />
        <p class="text-lg text-white max-w-sm">
          {{ hero.description }}
        </p>
      </div>

      <div class="HeroBg mb-block-1" />
      <div
        class="w-block-2 h-block-2 absolute -bottom-block-2 -left-block-2 flex flex-wrap"
      >
        <div class="w-1/2 h-1/2 bg-additional" />
        <div class="w-1/2 h-1/2 bg-additional" />
        <div class="w-1/2 h-1/2 bg-transparent" />
        <div class="w-1/2 h-1/2 bg-additional" />
      </div>

      <div
        class="w-block-4 h-block-4 bg-additional absolute bottom-block-2 -right-block-4 rounded-full"
      />
    </div>
    <Socials
      class="absolute bottom-3 right-8 z-10"
    />
  </section>
</template>

<script>
export default {
  computed: {
    hero() {
      return this.$store.state.content.homepage.hero;
    },
  },
};
</script>

<style lang="scss" scoped>
.HeroBox {
  position: absolute;
  left: 0;
  z-index: 12;

  &::before,
  &::after {
    background: $color-primary;
    position: absolute;
    content: '';
    bottom: 0;
    width: $block-size * 2;
  }
  &::before {
    right: -$block-size * 1.95;
    height: calc(100% - #{$block-size * 1.95});
  }
  &::after {
    right: -$block-size * 3.9;
    height: calc(100% - #{$block-size * 3.9});
  }
}

.HeroBg {
  position: relative;
  width: 75%;
  height: 75%;
  background: url(~assets/img/homepage-hero-bg.jpg);
  background-size: cover;
  margin-right: 5%;

  &:before {
    content: '';
    background: $color-additional;
    width: $block-size;
    height: $block-size * 4;
    position: absolute;
    left: -$block-size;
    top: 25%;
  }

  &:after {
    content: '';
    background: $color-secondary;
    width: $block-size * 4;
    height: $block-size * 4;
    position: absolute;
    right: -$block-size * 2;
    top: 5%;
    border-top-left-radius: 97%;
  }
}
</style>
