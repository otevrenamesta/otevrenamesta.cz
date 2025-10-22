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

        <label class="FormGroup">
          <span class="FormLabel">
            {{ content.form.city }}
          </span>
          <input
            v-model="form.city"
            type="text"
            class="FormInput"
            :placeholder="content.form.cityPlaceholder"
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
            {{ content.form.message }}
          </span>
          <textarea
            v-model="form.message"
            class="FormInput"
            :placeholder="content.form.messagePlaceholder"
          />
        </label>
      </div>

      <div class="flex items-center gap-5 mb-10">
        <div class="FormGroup">
          <span class="FormLabel mb-5">
            {{ content.form.interestedInLabel }}
          </span>
          <div class="flex mt-5 flex-col sm:items-center sm:flex-row">
            <label class="FormRadioGroup mb-4 sm:mb-0">
              <div class="FormRadio">
                <input
                  v-model="form.interestedIn"
                  type="radio"
                  value="clenstvi"
                  class="FormRadioInput"
                >
              </div>
              <span class="text-lg text-white font-bold">
                {{ content.form.membership }}
              </span>
            </label>
            <label class="FormRadioGroup mb-4 sm:mb-0">
              <div class="FormRadio">
                <input
                  v-model="form.interestedIn"
                  type="radio"
                  value="produkty"
                  class="FormRadioInput"
                  required
                >
              </div>
              <span class="text-lg text-white font-bold">
                {{ content.form.services }}
              </span>
            </label>
            <label class="FormRadioGroup">
              <div class="FormRadio">
                <input
                  v-model="form.interestedIn"
                  type="radio"
                  value="informace"
                  class="FormRadioInput"
                  required
                >
              </div>
              <span class="text-lg text-white font-bold">
                {{ content.form.information }}
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

      <div class="flex items-start justify-between flex-col sm:flex-row">
        <p class="text-sm max-w-xs mb-4 sm:mb-0">
          {{ content.form.consent }}
        </p>
        <Button
          type="dark"
          icon="icon-arrow-open"
          native-type="submit"
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
const content = computed(() => useContentStore().collaboration);

// Refs
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const invisibleHcaptcha = ref(null);

const form = ref({
  fullname: '',
  city: '',
  email: '',
  phone: '',
  message: '',
  interestedIn: 'clenstvi',
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
    await useApi.post('/items/messages/', {
      body: {
        jmeno: form.value.fullname,
        mesto: form.value.city,
        email: form.value.email,
        tel: form.value.phone,
        subject: form.value.interestedIn,
        content: form.value.message,
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

  .FormRadioGroup {
    @apply flex mr-block-0.5 cursor-pointer;

    span {
      @apply block leading-tight;
    }
  }

  .FormRadio {
    @apply border border-black/60 w-[22px] h-[22px] flex items-center justify-center mr-3 rounded-full;

    .FormRadioInput {
      @apply block appearance-none w-[16px] h-[16px] bg-black/0 rounded-full;

      &:checked {
        @apply bg-black/60;
      }
    }
  }
}
</style>
