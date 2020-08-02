<template>
  <section>
    <v-row align="center" no-gutters>
      <v-icon>{{ icon }}</v-icon>
      <span class="ml-2 text-h6">收款人資訊</span>
    </v-row>

    <validation-provider
      v-slot="{ errors }"
      name="銀行代號"
      rules="required"
      slim
    >
      <v-autocomplete
        v-model="code"
        :error-messages="errors"
        :items="banks"
        label="*銀行代號"
        menu-props="attach,offsetY"
        required
      />
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="帳號"
      rules="required|numeric"
      slim
    >
      <input-number
        v-model="no"
        :error-messages="errors"
        label="*帳號"
        required
      />
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="戶名"
      rules="required|min:2"
      slim
    >
      <v-text-field
        v-model="name"
        :error-messages="errors"
        label="*戶名"
        min-length="2"
        required
      />
    </validation-provider>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiBank } from '@mdi/js'
import banks from './banks'
import InputNumber from '~/components/input-number.vue'

export default Vue.extend({
  components: {
    InputNumber,
  },

  data: () => ({
    banks,
    code: '',
    icon: mdiBank,
    name: '',
    no: '',
  }),
})
</script>
