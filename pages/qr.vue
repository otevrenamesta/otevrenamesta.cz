<template>
  <main class="mt-block-2 md:mt-block-4 container">
    <div
      class="flex flex-col items-center"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <img
        :src="codes[activeIndex].image"
        alt="QR kód"
        class="max-w-full select-none mt-[20px]"
      >
      <a
        :href="codes[activeIndex].link"
        target="_blank"
        class="text-secondary font-semibold hover:underline mt-4"
      >
        {{ codes[activeIndex].label }}
      </a>

      <div class="flex gap-2 mt-4">
        <button
          v-for="(code, index) in codes"
          :key="index"
          type="button"
          class="w-2 h-2 rounded-full"
          :class="index === activeIndex ? 'bg-secondary' : 'bg-primary-light'"
          :aria-label="`Zobrazit QR kód ${code.label}`"
          @click="activeIndex = index"
        />
      </div>
    </div>

    <div class="mt-block-3 md:mt-block-5 container"></div>
  </main>
</template>

<script setup>
import Qr1 from '~/assets/img/om-qr.jpg';
import Qr2 from '~/assets/img/openopen-qr.jpg';
import Qr3 from '~/assets/img/ls-qr.jpg';
import Qr4 from '~/assets/img/jv-qr.jpg';

useCustomHead({
  title: 'QR',
});

const codes = [
  { image: Qr1, label: 'OtevrenaMesta.cz', link: 'https://otevrenamesta.cz/en' },
  { image: Qr2, label: 'OpenOpen.cz', link: 'https://openopen.cz' },
  { image: Qr3, label: 'Lucie Smolka', link: 'https://www.linkedin.com/in/luciesmolka/' },
  { image: Qr4, label: 'Jan Volmut', link: 'https://www.linkedin.com/in/jan-volmut/' },
];
const activeIndex = ref(0);

let touchStartX = 0;

const onTouchStart = (event) => {
  touchStartX = event.changedTouches[0].clientX;
};

const onTouchEnd = (event) => {
  const touchEndX = event.changedTouches[0].clientX;
  const deltaX = touchEndX - touchStartX;
  const swipeThreshold = 50;

  if (deltaX > swipeThreshold) {
    activeIndex.value = (activeIndex.value - 1 + codes.length) % codes.length;
  } else if (deltaX < -swipeThreshold) {
    activeIndex.value = (activeIndex.value + 1) % codes.length;
  }
};
</script>
