<template>
  <section>
    <v-row align="center" no-gutters>
      <v-icon>{{ icon }}</v-icon>
      <span class="ml-2 text-h6">主揪信用卡資訊</span>
    </v-row>

    <validation-provider
      v-slot="{ errors }"
      name="手續費"
      :rules="{
        min: 0,
        regex: /^\d+(\.\d+)?$/,
      }"
      slim
      vid="card.fees"
    >
      <input-number
        v-model="fees"
        :error-messages="errors"
        label="手續費"
        min="0"
        required
        step="0.1"
      />
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="回饋"
      :rules="{
        min: 0,
        regex: /^\d+(\.\d+)?$/,
      }"
      slim
      vid="card.reward"
    >
      <input-number
        v-model="reward"
        :error-messages="errors"
        label="回饋"
        min="0"
        required
        step="0.1"
      />
    </validation-provider>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiCreditCard } from '@mdi/js'
import InputNumber from '~/components/input-number.vue'

export default Vue.extend({
  components: {
    InputNumber,
  },

  data: () => ({
    fees: '0',
    icon: mdiCreditCard,
    reward: '0',
  }),
})
</script>
