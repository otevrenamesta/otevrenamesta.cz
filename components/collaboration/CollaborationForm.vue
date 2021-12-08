<template>
  <form
    class="Form"
    @submit.prevent.stop="presubmitForm"
  >
    <div v-if="isSubmitted">
      <h2 class="text-center text-white text-4xl font-semibold">
        Děkujeme za Váš zájem.
      </h2>
    </div>

    <template v-else>
      <div class="flex items-center gap-5 flex-col sm:flex-row">
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

      <div class="flex items-center gap-5 flex-col sm:flex-row">
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

      <div class="flex items-center gap-5 flex-col sm:flex-row">
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
                Členství
              </span>
            </label>
            <label class="FormRadioGroup">
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
                Nákup služeb
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
          Vyplněním a odesláním formuláře souhlasíte
          se zpracováním Vašich osobních údajů.
        </p>
        <Button
          type="dark"
          icon="icon-arrow-open"
          native-type="submit"
        >
          Odeslat
        </Button>
      </div>
    </template>
  </form>
</template>

<script>
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';

export default {
  components: {
    VueHcaptcha,
  },

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
        interestedIn: 'clenstvi',
      },
    };
  },

  methods: {
    presubmitForm() {
      this.$refs.invisibleHcaptcha.execute();
    },
    async verifiedSubmit(token) {
      this.isSubmitting = true;

      try {
        await this.$axios.$post('https://modurad.otevrenamesta.cz/contactforms/otevrenamesta.cz/', {
          jmeno: this.form.fullname,
          mesto: this.form.city,
          email: this.form.email,
          tel: this.form.phone,
          subject: this.form.interestedIn,
          content: this.form.message,
          url: 'https://modurad.otevrenamesta.cz/omesta/uni/messages/',
          token,
        });

        this.isSubmitted = true;
      } catch (error) {
        alert('Omlouváme se, došlo k chybě při odesílání formuláře');
        this.isSubmitting = false;
      }
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
