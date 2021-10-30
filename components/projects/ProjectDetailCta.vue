<template>
  <section class="container">
    <div class="relative bg-primary sm:bg-transparent">
      <div class="sm:absolute z-10 sm:left-block-2 sm:top-block-2 p-block-0.5 sm:p-0">
        <div class="w-block-6 max-w-full">
          <div
            class="mb-block-1"
            v-html="illustration1"
          />
          <h3 class="text-white text-6xl font-bold tracking-tight mb-4">
            Chci řešení na míru
          </h3>
          <p class="text-white mb-block-1">
            Lorem ipsum je označení pro standardní pseudolatinský text užívaný v grafickém designu.
          </p>
          <nuxt-link
            to="/"
          >
            <Button
              type="secondary"
              icon="icon-arrow-open"
            >
              Zjistit více
            </Button>
          </nuxt-link>
        </div>
      </div>
      <div class="sm:absolute z-10 sm:left-block-2 md:left-auto md:right-block-2 lg:right-block-4 sm:bottom-block-2 md:bottom-auto md:top-block-2 p-block-0.5 sm:p-0">
        <div class="w-block-6 max-w-full">
          <div
            class="mb-block-1"
            v-html="illustration2"
          />
          <h3 class="text-white text-6xl font-bold tracking-tight mb-4">
            Chci se stát členem
          </h3>
          <p class="text-white mb-block-1">
            Lorem ipsum je označení pro standardní pseudolatinský text užívaný v grafickém designu.
          </p>
          <nuxt-link
            to="/"
          >
            <Button
              type="secondary"
              icon="icon-arrow-open"
            >
              Zjistit více
            </Button>
          </nuxt-link>
        </div>
      </div>
      <Grid
        :rows="$screen.md ? 6 : 11"
        inverse
        :hidden="!$screen.sm"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      illustration1: '<svg id="Component_69_2" data-name="Component 69 – 2" xmlns="http://www.w3.org/2000/svg" width="95" height="82" viewBox="0 0 95 82"><path id="Rectangle_669" data-name="Rectangle 669" fill="none" d="M0 0h95v82H0z"/><g id="Group_211" data-name="Group 211" transform="translate(0 14)" fill="#00d48f"><path id="Union_11" data-name="Union 11" d="m-5970 39.847 13.282-13.282L-5970 13.282-5956.718 0l13.282 13.282 13.282 13.282-13.282 13.282-13.282 13.282Z" transform="translate(6025)"/><path id="Union_12" data-name="Union 12" d="m-5970 39.847 13.282-13.282L-5970 13.282-5956.718 0l13.282 13.282 13.282 13.282-13.282 13.282-13.282 13.282Z" transform="rotate(180 -2965.077 26.564)"/></g></svg>',
      illustration2: '<svg xmlns="http://www.w3.org/2000/svg" width="95.5" height="82" viewBox="0 0 95.5 82"><g id="Component_69_2" data-name="Component 69 – 2" transform="translate(.5)"><path id="Rectangle_669" data-name="Rectangle 669" fill="none" d="M0 0h95v82H0z"/><path id="Union_13" data-name="Union 13" d="M0 40.355h64.712a32.357 32.357 0 0 1-32.356 32.356A32.357 32.357 0 0 1 0 40.355Zm32.356-16.177h16.178a16.177 16.177 0 0 1-16.178 16.177Zm-16.177 0A16.178 16.178 0 0 1 32.355 8v32.355a16.176 16.176 0 0 1-16.176-16.177Zm16.177 0V8a16.178 16.178 0 0 1 16.178 16.178Z" fill="#00d48f" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/></g></svg>',
    };
  },
};
</script>
