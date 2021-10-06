<template>
  <footer class="mt-block-2 mb-block-1">
    <div class="container flex justify-between items-center">
      <div class="flex items-center">
        <LogoOm />
        <div class="border-l border-secondary flex ml-block-1 pl-block-1 pt-5 pb-4">
          <p class="mr-12 text-primary text-sm">
            <strong class="block">
              Otevřená města, z. s.
            </strong>
            <span>
              Malinovského náměstí 624/3 <br>
              602 00 Brno
            </span>
          </p>
          <p class="text-primary text-sm">
            <strong class="block">
              <a href="mailto:info@otevrenamesta.cz" class="hover:underline">
                info@otevrenamesta.cz
              </a>
            </strong>
            <span>
              datová schránka f47yb4g<br>
              transparentní účet Fio 2501020615/2010<br>
              IČO 05129061
            </span>
          </p>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <Socials
          class="mb-5"
        />
        <div class="flex">
          <nuxt-link
            to="/"
            class="block text-sm text-primary uppercase font-semibold hover:underline"
          >
            Stanovy
          </nuxt-link>
          <nuxt-link
            to="/"
            class="block ml-5 text-sm text-primary uppercase font-semibold hover:underline"
          >
            Obchodní podmínky
          </nuxt-link>
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
};
</script>
