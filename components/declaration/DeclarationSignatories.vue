<template>
  <section class="container pt-block-2">
    <h3 class="uppercase text-primary text-xl font-bold mb-block-0.5">
      {{ signatories.title }}
    </h3>

    <div class="columns-1 sm:columns-2 md:columns-3 gap-x-12">
      <div
        v-for="{ letter, items } in signatories.letters"
        :key="letter.letter"
        class="max-w-md break-inside-avoid-column"
      >
        <div class="mb-8">
          <h4 class="uppercase text-primary text-base font-bold mb-block-0.5 border-b border-primary inline pb-0.5">
            {{ letter }}
          </h4>
        </div>
        <div
          v-for="(item, index) in items"
          :key="index"
          class="pb-8"
        >
          <div
            class="text-base font-bold mb-2"
            :class="item.isOrganization ? 'text-secondary' : 'text-primary'"
          >
            {{ item.title }}
          </div>
          <div class="text-gray-500">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    signatories() {
      return useContentStore().declaration.signatories;
    },
  },
};
</script>
