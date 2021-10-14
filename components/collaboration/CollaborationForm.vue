<template>
  <form
    class="Form"
    @submit.prevent.stop="submitForm"
  >
    <div class="flex items-center gap-5">
      <label class="FormGroup">
        <span class="FormLabel">
          Jméno a příjmení
        </span>
        <input
          v-model="form.fullname"
          type="text"
          class="FormInput"
          placeholder="Zadejte jméno..."
          required
        >
      </label>

      <label class="FormGroup">
        <span class="FormLabel">
          Město
        </span>
        <input
          v-model="form.city"
          type="text"
          class="FormInput"
          placeholder="Zadejte město..."
          required
        >
      </label>
    </div>

    <div class="flex items-center gap-5">
      <label class="FormGroup">
        <span class="FormLabel">
          Email
        </span>
        <input
          v-model="form.email"
          type="email"
          class="FormInput"
          placeholder="Zadejte email..."
          required
        >
      </label>

      <label class="FormGroup">
        <span class="FormLabel">
          Telefon
        </span>
        <input
          v-model="form.phone"
          type="tel"
          class="FormInput"
          placeholder="Zadejte telefon..."
          required
        >
      </label>
    </div>

    <div class="flex items-center gap-5">
      <label class="FormGroup">
        <span class="FormLabel">
          Zpráva
        </span>
        <textarea
          v-model="form.message"
          class="FormInput"
          placeholder="Zadejte zprávu..."
        />
      </label>
    </div>

    <div class="flex items-center gap-5 mb-10">
      <div class="FormGroup">
        <span class="FormLabel mb-5">
          Mám zájem o
        </span>
        <div class="flex items-center mt-5">
          <label class="FormRadioGroup">
            <div class="FormRadio">
              <input
                v-model="form.interestedIn"
                type="radio"
                value="membership"
                class="FormRadioInput"
              >
            </div>
            <span class="text-lg text-white font-bold">
              Členství
            </span>
          </label>
          <label class="FormRadioGroup">
            <div class="FormRadio">
              <input
                v-model="form.interestedIn"
                type="radio"
                value="services"
                class="FormRadioInput"
                required
              >
            </div>
            <span class="text-lg text-white font-bold">
              Nákup služeb
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="flex items-start justify-between">
      <p class="text-sm max-w-xs">
        Vyplněním a odesláním formuláře souhlasíte
        se zpracováním Vašich osobních údajů.
      </p>
      <Button
        icon="icon-arrow-open"
        native-type="submit"
      >
        Odeslat
      </Button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isSubmitting: false,
      isSubmitted: false,
      form: {
        fullname: '',
        city: '',
        email: '',
        phone: '',
        message: '',
        interestedIn: 'membership',
      },
    };
  },

  methods: {
    submitForm() {
      console.log(this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
.Form {
  &Group {
    @apply w-full;
  }
  &Label {
    @apply block uppercase font-semibold text-sm text-black text-opacity-60 mb-2;
  }
  &Input {
    @apply border-b border-black border-opacity-60 bg-transparent text-white font-bold outline-none py-3 mb-12 w-full;

    &::placeholder {
      @apply text-white text-opacity-60;
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
    @apply border border-black border-opacity-60 w-6 h-6 flex items-center justify-center mr-5;

    &Input {
      @apply block appearance-none w-[85%] h-[85%] bg-black bg-opacity-0;

      &:checked {
        @apply bg-opacity-60;
      }
    }
  }
}
</style>
