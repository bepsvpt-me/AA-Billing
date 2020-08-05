<template>
  <v-container>
    <validation-observer v-slot="{ invalid }" slim>
      <v-form>
        <founder-info class="mb-4" />

        <credit-card-info class="mb-4" />

        <beneficiary-info class="mb-4" />

        <service-info class="mb-4" />

        <v-btn block color="primary" :disabled="invalid" type="submit">
          創建
        </v-btn>
      </v-form>
    </validation-observer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import BeneficiaryInfo from '~/components/found/form/beneficiary-info.vue'
import CreditCardInfo from '~/components/found/form/credit-card-info.vue'
import FounderInfo from '~/components/found/form/founder-info.vue'
import ServiceInfo from '~/components/found/form/service-info.vue'

export default Vue.extend({
  components: {
    BeneficiaryInfo,
    CreditCardInfo,
    FounderInfo,
    ServiceInfo,
  },

  data: () => ({}),
})
</script>
