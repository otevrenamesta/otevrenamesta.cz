export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('preposition-space', {
    bind(el) {
      const text = el.innerHTML.trim();

      el.innerHTML = (text || '').replace(/(\s|^)(a|A|i|I|k|K|o|O|s|S|u|U|v|V|z|Z)(\s+)([^\p{Cc}\p{Cf}\p{zL}\p{Zp}]+)/gmi, '$1$2&nbsp;$4');
    },
  });
});
