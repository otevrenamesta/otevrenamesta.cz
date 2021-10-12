<template>
  <form class="Form">
    <div class="flex items-center gap-5">
      <label class="FormGroup">
        <span class="FormLabel">
          Jméno a příjmení
        </span>
        <input
          type="text"
          class="FormInput"
          placeholder="Zadejte jméno..."
        >
      </label>

      <label class="FormGroup">
        <span class="FormLabel">
          Město
        </span>
        <input
          type="text"
          class="FormInput"
          placeholder="Zadejte město..."
        >
      </label>
    </div>

    <div class="flex items-center gap-5">
      <label class="FormGroup">
        <span class="FormLabel">
          Email
        </span>
        <input
          type="email"
          class="FormInput"
          placeholder="Zadejte email..."
        >
      </label>

      <label class="FormGroup">
        <span class="FormLabel">
          Telefon
        </span>
        <input
          type="tel"
          class="FormInput"
          placeholder="Zadejte telefon..."
        >
      </label>
    </div>

    <div class="flex items-center gap-5">
      <label class="FormGroup">
        <span class="FormLabel">
          Zpráva
        </span>
        <input
          type="email"
          class="FormInput"
          placeholder="Zadejte zprávu..."
        >
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
                type="radio"
                name="interestedIn"
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
                type="radio"
                name="interestedIn"
                class="FormRadioInput"
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
      >
        Odeslat
      </Button>
    </div>
  </form>
</template>

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
      @apply block appearance-none w-5 h-5 bg-black bg-opacity-0;

      &:checked {
        @apply bg-opacity-60;
      }
    }
  }
}
</style>
