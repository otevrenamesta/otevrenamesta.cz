<template>
  <div
    ref="root"
    class="player"
    :class="{ paused: !playing }"
    :aria-label="label"
    :style="{ '--dur': `${DUR / 1000}s` }"
  >
    <div class="bar">
      <span class="dots"><i /><i /><i /></span>
      <span class="tag">{{ tag }}</span>
    </div>
    <div class="screen">
      <img
        v-for="(frame, n) in frames"
        :key="frame.src"
        :src="frame.src"
        :alt="frame.alt"
        :class="{ on: n === index }"
        loading="lazy"
      >
      <span
        v-if="current.x !== undefined"
        :key="ringKey"
        class="ring show"
        :style="{ left: `${current.x / 1270 * 100}%`, top: `${current.y / 793 * 100}%` }"
        aria-hidden="true"
      />
    </div>
    <div
      class="cap"
      aria-live="polite"
    >
      <span class="num">{{ index + 1 }}/{{ frames.length }}</span>
      <span class="txt">{{ current.cap }}</span>
    </div>
    <div class="controls">
      <button
        type="button"
        class="play"
        @click="toggle"
      >
        {{ playing ? 'Pozastavit' : 'Přehrát' }}
      </button>
      <div class="segs">
        <button
          v-for="(frame, n) in frames"
          :key="n"
          type="button"
          :class="{ done: n < index }"
          :aria-label="`Krok ${n + 1}: ${frame.cap}`"
          @click="select(n)"
        >
          <span
            v-if="fillOn && n === index"
            :key="ringKey"
            class="fill"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // [{ src, alt, cap, x?, y? }] – x/y are tap positions in a 1270×793 frame
  frames: { type: Array, required: true },
  tag: { type: String, default: '' },
  label: { type: String, default: '' },
});

const DUR = 3400;

const root = ref(null);
const index = ref(0);
const playing = ref(false);
const fillOn = ref(false);
const ringKey = ref(0);
const current = computed(() => props.frames[index.value]);

let timer = null;
let userPaused = false;
let observer = null;

function show(k) {
  index.value = k;
  fillOn.value = playing.value;
  ringKey.value++; // restarts the tap ring and progress animations
}

function schedule() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    show((index.value + 1) % props.frames.length);
    schedule();
  }, DUR);
}

function play() {
  playing.value = true;
  show(index.value);
  schedule();
}

function pause() {
  playing.value = false;
  clearTimeout(timer);
}

function toggle() {
  if (playing.value) {
    userPaused = true;
    pause();
  } else {
    userPaused = false;
    play();
  }
}

function select(n) {
  show(n);
  if (playing.value) schedule();
}

onMounted(() => {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && e.intersectionRatio > 0.5 && !userPaused && !playing.value) play();
      else if (!e.isIntersecting && playing.value) pause();
    });
  }, { threshold: [0, 0.5] });
  observer.observe(root.value);
});

onBeforeUnmount(() => {
  clearTimeout(timer);
  observer?.disconnect();
});
</script>
