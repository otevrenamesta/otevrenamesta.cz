import VueScreen from 'vue-screen'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueScreen, 'tailwind');
});
