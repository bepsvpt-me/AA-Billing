<template>
  <section>
    <v-row align="center" no-gutters>
      <v-icon>{{ icon }}</v-icon>
      <span class="ml-2 text-h6">其他資訊</span>
    </v-row>

    <validation-provider
      v-slot="{ errors }"
      name="備註"
      rules="max:200"
      slim
      vid="remark"
    >
      <v-textarea
        v-model="remark"
        auto-grow
        counter="200"
        :error-messages="errors"
        label="備註"
        rows="2"
      />
    </validation-provider>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiInformation } from '@mdi/js'

export default Vue.extend({
  data: () => ({
    icon: mdiInformation,
    remark: '',
  }),
})
</script>
