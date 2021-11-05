<template>
  <section class="flex flex-wrap">
    <OtherProject
      v-for="index in 6"
      :key="index"
      class="w-full md:w-1/2 lg:w-1/3 border border-primary-light"
    />
  </section>
</template>
