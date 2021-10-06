<template>
  <main class="mt-block-4">
    <div class="container">
      <h2 class="text-primary font-bold text-4xl mb-block-1 tracking-tight">
        Naše projekty
      </h2>
    </div>
    <Projects />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: `Naše projekty ${this.$config.appendTitle}`,
    };
  },
};
</script>
