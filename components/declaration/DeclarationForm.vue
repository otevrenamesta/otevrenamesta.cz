<template>
  <form
    class="Form"
    @submit.prevent.stop="presubmitForm"
  >
    <div v-if="isSubmitted">
      <h2 class="text-center text-white text-4xl font-semibold">
        Thank you for your support.
      </h2>
    </div>

    <template v-else>
      <div class="flex items-center gap-5 flex-col sm:flex-row">
        <label class="FormGroup">
          <span class="FormLabel">
            Name and Surname*
          </span>
          <input
            v-model="form.fullname"
            type="text"
            class="FormInput"
            placeholder="Insert your name…"
            required
          >
        </label>
      </div>

      <div class="flex items-center gap-5 flex-col sm:flex-row">
        <label class="FormGroup">
          <span class="FormLabel">
            Email*
          </span>
          <input
            v-model="form.email"
            type="email"
            class="FormInput"
            placeholder="Insert your email…"
            required
          >
        </label>

        <label class="FormGroup">
          <span class="FormLabel">
            Phone
          </span>
          <input
            v-model="form.phone"
            type="tel"
            class="FormInput"
            placeholder="Insert your phone number…"
          >
        </label>
      </div>

      <div class="flex items-center gap-5 flex-col sm:flex-row">
        <label class="FormGroup">
          <span class="FormLabel">
            Organization
          </span>
          <input
            v-model="form.organization"
            class="FormInput"
            placeholder="Insert your organization…"
          >
        </label>
      </div>

      <div class="flex items-center gap-5 flex-col sm:flex-row">
        <label class="FormGroup">
          <span class="FormLabel">
            Position at the organization
          </span>
          <input
            v-model="form.position"
            class="FormInput"
            placeholder="Insert your position…"
          >
        </label>
      </div>

      <VueHcaptcha
        ref="invisibleHcaptcha"
        sitekey="ed5fa3e0-72f9-4dcd-b7ad-058202fb8223"
        size="invisible"
        @verify="verifiedSubmit"
      />

      <div class="flex items-start justify-between flex-col sm:flex-row gap-x-4">
        <p class="text-sm max-w-xs mb-4 sm:mb-0">
          By filling out and sending the form, you agree to the processing of your personal data.
        </p>
        <Button
          type="dark"
          icon="icon-arrow-open"
          native-type="submit"
          class="whitespace-nowrap"
        >
          Support Brno Declaration
        </Button>
      </div>
    </template>
  </form>
</template>

<script setup>
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';

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
      },
      headers: {
        Authorization: `Bearer ${apiTokenRes}`,
      },
    });

    isSubmitted.value = true;
  } catch (error) {
    console.error(error);
    alert('Omlouváme se, došlo k chybě při odesílání formuláře');
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.Form {
  &Group {
    @apply w-full;
  }
  &Label {
    @apply block uppercase font-semibold text-sm text-black text-opacity-60 mb-2;
  }
  &Input {
    @apply rounded-none border-b border-black border-opacity-60 bg-transparent text-white font-bold outline-none py-3 mb-12 w-full;

    &::placeholder {
      color: #B4FAC8;
    }

    &:focus {
      @apply border-opacity-90;
    }
  }

  &RadioGroup {
    @apply flex first:mr-block-1 cursor-pointer;

    span {
      @apply block leading-tight;
    }
  }

  &Radio {
    @apply border border-black border-opacity-60 w-[22px] h-[22px] flex items-center justify-center mr-5 rounded-full;

    &Input {
      @apply block appearance-none w-[16px] h-[16px] bg-black bg-opacity-0 rounded-full;

      &:checked {
        @apply bg-opacity-60;
      }
    }
  }
}
</style>
