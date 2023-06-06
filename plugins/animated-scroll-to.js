import animateScrollTo from 'animated-scroll-to';

const directive = (el, binding) => {
  el.addEventListener('click', (event) => {
    let element;

    if (typeof (binding.value) === 'string') {
      element = document.querySelector(binding.value);
    }

    if (element) {
      animateScrollTo(element);
    } else {
      console.error(`AnimateScroll - element (${binding.value}) doest exist`);
    }

    event.preventDefault();
  });
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animated-scroll-to', directive);
});
