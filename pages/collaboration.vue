<template>
  <main v-if="$store.state.content.collaboration">
    <CollaborationHero
      class="mb-block-2"
    />

    <CollaborationIntro
      class="mb-block-2"
    />

    <CollaborationSection
      illustration="illustration-collaboration-1"
      class="mb-block-2"
    >
      <div class="max-w-lg">
        <h2 class="text-5xl text-primary font-bold tracking-tight mb-5">
          {{ sections.member.title }}
        </h2>
        <p
          v-preposition-space
          class="text-secondary text-base font-medium mb-block-1"
          v-html="sections.member.description"
        />

        <h3 class="text-lg text-priamry uppercase text-primary font-bold mb-5">
          {{ sections.member.pricing.title }}
        </h3>
        <p
          v-preposition-space
          class="text-sm text-primary mb-block-0.5"
          v-html="sections.member.pricing.description"
        />

        <h3
          v-if="sections.member.membership.title"
          class="text-lg text-priamry uppercase text-primary font-bold mb-5"
        >
          {{ sections.member.membership.title }}
        </h3>
        <p
          v-preposition-space
          class="text-sm text-primary mb-4"
          v-html="sections.member.membership.description"
        />
        <a
          v-if="sections.member.membership.url"
          :href="sections.member.membership.url"
          target="_blank"
          class="mb-block-0.5 block"
        >
          <Button
            type="transparent"
            icon="icon-arrow-right"
            class="text-secondary pl-0"
          >
            {{ sections.member.membership.button }}
          </Button>
        </a>
      </div>
      <h3 class="text-lg text-priamry uppercase text-primary font-bold mb-5">
        {{ sections.member.benefits.title }}
      </h3>
      <div class="flex flex-wrap -mx-block-0.5">
        <div
          v-for="(item, index) in sections.member.benefits.items"
          :key="index"
          class="w-full sm:w-1/2 max-w-sm"
        >
          <div class="px-block-0.5 mb-block-0.5">
            <strong class="block text-sm font-semibold text-primary text-opacity-75 mb-2.5">
              {{ item.title }}
            </strong>
            <p
              v-preposition-space
              class="text-black text-opacity-60 text-sm font-medium"
              v-html="item.description"
            />
          </div>
        </div>
      </div>
    </CollaborationSection>

    <CollaborationSection
      illustration="illustration-collaboration-2"
      class="mb-block-2"
    >
      <div class="max-w-lg">
        <h2 class="text-5xl text-primary font-bold tracking-tight mb-5">
          {{ sections.services.title }}
        </h2>
        <p
          v-preposition-space
          class="text-secondary text-base font-medium mb-block-1"
          v-html="sections.services.description"
        />
        <h3 class="text-lg text-priamry uppercase text-primary font-bold mb-5">
          {{ sections.services.pricing.title }}
        </h3>
        <p
          v-preposition-space
          class="text-sm text-primary mb-2"
          v-html="sections.services.pricing.description"
        />
        <div class="flex items-center mb-block-1">
          <a
            :href="sections.services.pricing.url"
            target="_blank"
          >
            <Button
              type="transparent"
              icon="icon-arrow-right"
              class="text-secondary pl-0"
            >
              {{ sections.services.pricing.title }}
            </Button>
          </a>
          <!-- <Button
            type="transparent"
            icon="icon-arrow-right"
            class="text-secondary"
          >
            ceník pro ostatní
          </Button> -->
        </div>
      </div>
      <h3 class="text-lg text-priamry uppercase text-primary font-bold mb-5">
        {{ sections.services.benefits.title }}
      </h3>
      <div class="flex flex-wrap -mx-block-0.5">
        <div
          v-for="(item, index) in sections.services.benefits.items"
          :key="index"
          class="w-full sm:w-1/2 max-w-sm"
        >
          <div class="px-block-0.5 mb-block-0.5">
            <strong class="block text-sm font-semibold text-primary text-opacity-75 mb-2.5">
              {{ item.title }}
            </strong>
            <p
              v-preposition-space
              class="text-black text-opacity-60 text-sm font-medium"
              v-html="item.description"
            />
          </div>
        </div>
      </div>
    </CollaborationSection>

    <CollaborationSection
      illustration="illustration-collaboration-3"
      class="mb-block-2"
    >
      <div class="max-w-lg">
        <h2 class="text-5xl text-primary font-bold tracking-tight mb-5">
          {{ sections.opensource.title }}
        </h2>
        <p
          v-preposition-space
          class="text-secondary text-base font-medium mb-block-1 underline-links"
          v-html="sections.opensource.description"
        />
      </div>
    </CollaborationSection>

    <CollaborationJoinUs
      ref="JoinUs"
      class="mb-block-2"
    />
  </main>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('content/load', { page: 'collaboration' });
  },
  head() {
    return {
      title: `${this.$store.state.content.collaboration?.hero?.title} ${this.$config.appendTitle}`,
    };
  },
  computed: {
    sections() {
      return this.$store.state.content.collaboration.sections;
    },
  },
  watch: {
    '$store.state.content.collaboration'() {
      this.$nextTick(() => {
        if (this.$route.hash === '#form') {
          const top = this.$refs.JoinUs?.$el?.getBoundingClientRect().top || 0;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    },
  },
};
</script>
