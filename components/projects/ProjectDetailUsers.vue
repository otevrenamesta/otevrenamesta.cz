<template>
  <section
    v-if="project.uzivatele && project.uzivatele.length"
    class="pt-block-1 pb-block-1"
  >
    <h3 class="uppercase text-primary text-lg font-bold mb-block-0.5">
      Uživatelé projektu
    </h3>
    <div>
      <div
        v-for="(uzivatel, index) in project.uzivatele"
        :key="index"
        class="mb-6 last:mb-0"
      >
        <strong class="text-light text-sm font-semibold block mb-1">
          {{ uzivatel.nadpis }}
        </strong>
        <p
          class="text-sm font-medium text-gray mb-1"
          v-html="$md.render(uzivatel.popis)"
        />
        <a
          v-if="uzivatel.link"
          :href="uzivatel.link"
        >
          <Button
            type="transparent"
            icon="icon-arrow-right"
            class="text-secondary px-0"
          >
            Přejít na web
          </Button>
        </a>
      </div>
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
};
</script>
