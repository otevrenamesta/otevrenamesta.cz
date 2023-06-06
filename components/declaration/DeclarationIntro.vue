<template>
  <section class="pb-block-2">
    <div
      class="text-primary font-semibold text-3xl mb-block-1"
      v-html="intro.title"
    />

    <div class="flex flex-col sm:flex-row gap-4 mb-block-2">
      <a
        href="#form"
      >
        <Button
          icon="icon-arrow-open"
        >
          {{ intro.cta.title }}
        </Button>
      </a>
      <Button
        v-animated-scroll-to="'#signatories'"
        type="transparent"
        icon="icon-arrow-right"
        class="text-secondary"
      >
        {{ intro.signatoriesButton.title }}
      </Button>
    </div>

    <div>
      <h3 class="uppercase text-primary text-xl font-bold mb-block-0.5">
        {{ intro.opensource.title }}
      </h3>
      <div
        class="text-xl prose mb-block-1"
        v-html="intro.opensource.description"
      />

      <div class="prose before:prose-li:bg-primary mb-block-1.5">
        <ul class="max-w-md">
          <li
            v-for="(item, index) in intro.opensource.list"
            :key="index"
            class="mb-block-0.5 !before:bg-secondary text-xl"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <a
        :href="intro.opensource.showMore.url"
        target="_blank"
      >
        <Button
          icon="icon-arrow-open"
        >
          {{ intro.opensource.showMore.title }}
        </Button>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    intro() {
      return useContentStore().declaration.intro;
    },
  },
};
</script>
