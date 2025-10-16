<template>
  <section class="container">
    <h2 class="text-primary-dark font-bold text-4xl mb-8">
      Členové výboru
    </h2>
    <div class="flex flex-wrap -mx-6 md:-mx-block-0.5">
      <div
        v-for="(perosn, index) in useContentStore().global.leaderships"
        :key="index"
        class="px-6 md:px-block-0.5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
      >
        <Person
          :person="perosn"
          class="text-primary-dark mb-block-1"
        />
      </div>
    </div>

    <h2 class="text-secondary font-bold text-4xl mb-8 mt-block-1.5">
      Projektová rada
    </h2>
    <div class="flex flex-wrap -mx-6 md:-mx-block-0.5">
      <div
        v-for="(perosn, index) in useContentStore().about.employees"
        :key="index"
        class="px-6 md:px-block-0.5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
      >
        <Person
          :person="perosn"
          class="text-secondary mb-block-1"
        />
      </div>
    </div>
  </section>
</template>
