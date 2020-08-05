<template>
  <section>
    <v-row align="center" no-gutters>
      <v-icon>{{ icon }}</v-icon>
      <span class="ml-2 text-h6">主揪資訊</span>
    </v-row>

    <validation-provider
      v-slot="{ errors }"
      name="姓名"
      rules="required|min:2"
      slim
      vid="founder.name"
    >
      <v-text-field
        v-model="name"
        :error-messages="errors"
        label="*姓名"
        required
      />
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="信箱"
      rules="required|email"
      slim
      vid="founder.email"
    >
      <v-text-field
        v-model="email"
        :error-messages="errors"
        inputmode="email"
        label="*信箱"
        required
        type="email"
      />
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="手機"
      rules="required|digits:10"
      slim
      vid="founder.phone"
    >
      <input-number
        v-model="phone"
        :error-messages="errors"
        label="*手機"
        required
      />
    </validation-provider>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiCardAccountDetails } from '@mdi/js'
import InputNumber from '~/components/input-number.vue'

export default Vue.extend({
  components: {
    InputNumber,
  },

  data: () => ({
    email: '',
    icon: mdiCardAccountDetails,
    name: '',
    phone: '',
  }),
})
</script>
