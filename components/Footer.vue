<template>
  <footer v-if="footer" class="mt-block-2 mb-block-1">
    <div class="container flex justify-between lg:items-center flex-col lg:flex-row">
      <div class="flex flex-col md:flex-row mb-8 lg:mb-0">
        <LogoOm
          class="mb-8 w-44 h-auto md:mb-0"
        />
        <div class="border-none md:border-l border-secondary flex md:ml-block-1 pl-0 md:pl-block-1 pt-5 pb-4 flex-col sm:flex-row">
          <p class="mr-12 text-primary text-sm mb-8 sm:mb-0">
            <strong class="block">
              {{ contact.name }}
            </strong>
            <span
              v-html="contact.address"
            />
          </p>
          <p class="text-primary text-sm">
            <strong class="block">
              <a :href="`mailto:${contact.email}`" class="hover:underline">
                {{ contact.email }}
              </a>
            </strong>
            <span
              class="underline-links"
              v-html="contact.bank"
            />
          </p>
        </div>
      </div>
      <div class="flex flex-col lg:items-end">
        <Socials
          class="mb-5"
        />
        <div class="flex gap-4">
          <a
            v-for="(link, index) in footer.links"
            :key="index"
            :href="link.url"
            class="block text-sm text-primary uppercase font-semibold hover:underline whitespace-nowrap"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoOm from '~/assets/img/logo-om.svg?inline';

export default {
  components: {
    LogoOm,
  },
  computed: {
    contact() {
      return this.$store.state.content.global.contact;
    },
    footer() {
      return this.$store.state.content.global.footer;
    },
  },
};
</script>
