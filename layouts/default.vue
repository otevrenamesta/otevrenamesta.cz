<template>
  <div>
    <Header
      :menu-items="menuItems"
    />

    <nuxt />

    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [],
    };
  },
  async fetch() {
    const { menuItems } = await this.$content(`${this.$i18n.locale}/global`).fetch();
    this.menuItems = menuItems;
  },
};
</script>
