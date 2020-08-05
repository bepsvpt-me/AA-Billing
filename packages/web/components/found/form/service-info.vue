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
        @change="onPriceChanged"
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
        @change="onPriceChanged"
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
        label="*定價"
        required
        suffix="元"
      />
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="人數"
      rules="required|min:1"
      slim
    >
      <input-number
        v-model="members"
        :error-messages="errors"
        label="*人數（含主揪）"
        max="12"
        min="1"
        required
        suffix="人"
      />
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="週期"
      rules="required|between:1,12"
      slim
    >
      <input-number
        v-model="cycle"
        :error-messages="errors"
        label="*週期"
        max="12"
        min="1"
        required
        suffix="個週期"
      />
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="收費"
      rules="required|between:1,12"
      slim
    >
      <input-number
        v-model="payment"
        :error-messages="errors"
        label="*收費"
        min="0"
        prefix="每人"
        required
        suffix="元"
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
import services, { Service } from './services'
import InputNumber from '~/components/input-number.vue'

export default Vue.extend({
  components: {
    InputNumber,
  },

  data: () => ({
    cycle: '12',
    members: '1',
    name: '',
    payment: '0',
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

    plans(): string[] {
      const plans = ['其他']

      if (!this.service) {
        return plans
      }

      plans.unshift(...this.service.plans.map((plan) => plan.text))

      return plans
    },

    service(): Service | undefined {
      return this.services.find((service) => service.value === this.name)
    },
  },

  watch: {
    cycle() {
      this.calculate()
    },

    members() {
      this.calculate()
    },

    price() {
      this.calculate()
    },
  },

  methods: {
    calculate() {
      if (!(this.price && this.members && this.cycle)) {
        return
      }

      const total = parseFloat(this.price) * parseInt(this.cycle, 10)

      const average = total / parseInt(this.members, 10)

      this.payment = Math.round(average).toString(10)
    },

    onPriceChanged() {
      if (!this.service) {
        return
      }

      const plan = this.service.plans.find((plan) => plan.text === this.plan)

      if (plan) {
        this.members = plan.maximum

        this.price = plan.value
      }
    },
  },
})
</script>
