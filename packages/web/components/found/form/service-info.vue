<template>
  <section>
    <v-row align="center" no-gutters>
      <v-icon>{{ icon }}</v-icon>
      <span class="ml-2 text-h6">共享服務資訊</span>
    </v-row>

    <validation-provider v-slot="{ errors }" name="服務" rules="required" slim>
      <v-autocomplete
        v-model="name"
        :error-messages="errors"
        :items="services"
        label="*服務"
        menu-props="attach,offsetY"
        required
        @change="changePrice"
      />
    </validation-provider>

    <validation-provider v-slot="{ errors }" name="方案" rules="required" slim>
      <v-autocomplete
        v-model="plan"
        :error-messages="errors"
        :items="plans"
        label="*方案"
        menu-props="attach,offsetY"
        required
        @change="changePrice"
      />
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="定價"
      rules="required|numeric|min_value:0"
      slim
    >
      <input-number
        v-model="price"
        :error-messages="errors"
        hint="*新台幣"
        label="*定價"
        required
      />
    </validation-provider>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdiEarth,
  mdiMicrosoftOffice,
  mdiNetflix,
  mdiOnepassword,
  mdiSpotify,
  mdiYoutube,
} from '@mdi/js'
import services from './services'
import InputNumber from '~/components/input-number.vue'

export default Vue.extend({
  components: {
    InputNumber,
  },

  data: () => ({
    name: '',
    plan: '',
    price: '',
    services,
  }),

  computed: {
    icon(): string {
      switch (this.name) {
        case '1password':
          return mdiOnepassword

        case 'microsoft-365':
          return mdiMicrosoftOffice

        case 'netflix':
          return mdiNetflix

        case 'spotify':
          return mdiSpotify

        case 'youtube':
          return mdiYoutube

        default:
          return mdiEarth
      }
    },

    plans() {
      const plans = ['其他']

      if (!this.service) {
        return plans
      }

      plans.unshift(...this.service.plans.map((plan) => plan.text))

      return plans
    },

    service() {
      return this.services.find((service) => service.value === this.name)
    },
  },

  methods: {
    changePrice() {
      if (!this.service) {
        return
      }

      const plan = this.service.plans.find((plan) => plan.text === this.plan)

      if (plan) {
        this.price = plan.value
      }
    },
  },
})
</script>
