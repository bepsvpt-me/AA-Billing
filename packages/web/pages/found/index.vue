<template>
  <v-container>
    <validation-observer ref="form" v-slot="{ handleSubmit, invalid }" slim>
      <v-form
        class="found-form"
        :readonly="loading"
        @submit.prevent="handleSubmit(onFormSubmit)"
      >
        <founder-info />

        <credit-card-info />

        <beneficiary-info />

        <service-info :fees="card.fees" :reward="card.reward" />

        <other-info />

        <v-btn
          block
          color="primary"
          :disabled="invalid"
          :loading="loading"
          type="submit"
        >
          創建
        </v-btn>
      </v-form>
    </validation-observer>

    <div>{{ form }}</div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { set } from 'lodash'
import { ValidationObserver } from 'vee-validate'
import BeneficiaryInfo from '~/components/found/form/beneficiary-info.vue'
import CreditCardInfo from '~/components/found/form/credit-card-info.vue'
import FounderInfo from '~/components/found/form/founder-info.vue'
import OtherInfo from '~/components/found/form/other-info.vue'
import ServiceInfo from '~/components/found/form/service-info.vue'

export default Vue.extend({
  components: {
    BeneficiaryInfo,
    CreditCardInfo,
    FounderInfo,
    OtherInfo,
    ServiceInfo,
  },

  data: () => ({
    loading: false,
    mounted: false,
  }),

  computed: {
    card(): Record<string, string> {
      return this.form.card || {}
    },

    form(): Record<string, Record<string, string>> {
      const form = { card: {} }

      if (!this.mounted) {
        return form
      }

      const { refs } = this.$refs.form as InstanceType<
        typeof ValidationObserver
      >

      Object.keys(refs).forEach((key) => set(form, key, refs[key].value))

      return form
    },
  },

  mounted() {
    this.mounted = true
  },

  methods: {
    onFormSubmit() {
      if (this.loading) {
        return
      }

      this.loading = true
    },
  },
})
</script>

<style lang="scss" scoped>
.found-form > * {
  margin-bottom: 1.25rem;
}
</style>
