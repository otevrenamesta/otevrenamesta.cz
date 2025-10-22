<template>
  <form
    class="Form"
    @submit.prevent.stop="presubmitForm"
  >
    <div v-if="isSubmitted">
      <h2 class="text-center text-white text-4xl font-semibold">
        {{ content.form.thankYou }}
      </h2>
    </div>

    <template v-else>
      <div class="flex items-center gap-5 flex-col sm:flex-row">
        <label class="FormGroup">
          <span class="FormLabel">
            {{ content.form.fullname }}
          </span>
          <input
            v-model="form.fullname"
            type="text"
            class="FormInput"
            :placeholder="content.form.fullnamePlaceholder"
            required
          >
        </label>
      </div>

      <div class="flex items-center gap-5 flex-col sm:flex-row">
        <label class="FormGroup">
          <span class="FormLabel">
            {{ content.form.email }}
          </span>
          <input
            v-model="form.email"
            type="email"
            class="FormInput"
            :placeholder="content.form.emailPlaceholder"
            required
          >
        </label>

        <label class="FormGroup">
          <span class="FormLabel">
            {{ content.form.phone }}
          </span>
          <input
            v-model="form.phone"
            type="tel"
            class="FormInput"
            :placeholder="content.form.phonePlaceholder"
          >
        </label>
      </div>

      <div class="flex items-center gap-5 flex-col sm:flex-row">
        <label class="FormGroup">
          <span class="FormLabel">
            {{ content.form.organization }}
          </span>
          <input
            v-model="form.organization"
            class="FormInput"
            :placeholder="content.form.organizationPlaceholder"
          >
        </label>
      </div>

      <div class="flex items-center gap-5 flex-col sm:flex-row">
        <label class="FormGroup">
          <span class="FormLabel">
            {{ content.form.position }}
          </span>
          <input
            v-model="form.position"
            class="FormInput"
            :placeholder="content.form.positionPlaceholder"
          >
        </label>
      </div>

      <div class="flex items-center gap-5 mb-10">
        <div class="FormGroup">
          <div class="flex mt-5 flex-col sm:items-center sm:flex-row">
            <label class="FormCheckboxGroup mb-4 sm:mb-0">
              <div class="FormCheckbox">
                <input
                  v-model="form.onOrgBehalf"
                  type="checkbox"
                  value="onOrgBehalf"
                  class="FormCheckboxInput"
                >
              </div>
              <span class="text-lg text-white font-bold">
                {{ content.form.onOrgBehalf }}
              </span>
            </label>
          </div>
        </div>
      </div>

      <VueHcaptcha
        ref="invisibleHcaptcha"
        sitekey="ed5fa3e0-72f9-4dcd-b7ad-058202fb8223"
        size="invisible"
        @verify="verifiedSubmit"
      />

      <div class="flex items-start justify-between flex-col sm:flex-row gap-x-4">
        <p class="text-sm max-w-xs mb-4 sm:mb-0">
          {{ content.form.consent }}
        </p>
        <Button
          type="dark"
          icon="icon-arrow-open"
          native-type="submit"
          class="whitespace-nowrap"
        >
          {{ content.form.submit }}
        </Button>
      </div>
    </template>
  </form>
</template>

<script setup>
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';

// Computed
const content = computed(() => useContentStore().declaration);

// Refs
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const invisibleHcaptcha = ref(null);
const form = ref({
  fullname: '',
  email: '',
  phone: '',
  organization: '',
  position: '',
  onOrgBehalf: false,
});

// Methods
const presubmitForm = () => {
  invisibleHcaptcha.value.execute();
};

const verifiedSubmit = async(token) => {
  isSubmitting.value = true;

  try {
    const tokenURL = `/hcaptcha-validate/1/${token}`;
    const apiTokenRes = await useApi.get(tokenURL);
    await useApi.post('/items/ospo_support/', {
      body: {
        jmeno: form.value.fullname,
        email: form.value.email,
        tel: form.value.phone,
        organizace: form.value.organization,
        pozice: form.value.position,
        on_org_behalf: form.value.onOrgBehalf,
      },
      headers: {
        Authorization: `Bearer ${apiTokenRes}`,
      },
    });

    isSubmitted.value = true;
  } catch (error) {
    console.error(error);
    alert(content.value.form.error);
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
@reference '~/assets/css/tailwind.css';

.Form {
  .FormGroup {
    @apply w-full;
  }
  .FormLabel {
    @apply block uppercase font-semibold text-sm text-black/60 mb-2;
  }
  .FormInput {
    @apply rounded-none border-b border-black/60 bg-transparent text-white font-bold outline-hidden py-3 mb-12 w-full;

    &::placeholder {
      color: #B4FAC8;
    }

    &:focus {
      @apply border-black/90;
    }
  }

  .FormCheckboxGroup {
    @apply flex first:mr-block-1 cursor-pointer;

    span {
      @apply block leading-tight;
    }
  }

  .FormCheckbox {
    @apply border border-black/60 w-[22px] h-[22px] flex items-center justify-center mr-5;

    .FormCheckboxInput {
      @apply block appearance-none w-[16px] h-[16px] bg-black/0;

      &:checked {
        @apply bg-black/60;
      }
    }
  }
}
</style>
