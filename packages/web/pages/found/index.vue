<template>
  <v-container>
    <validation-observer v-slot="{ invalid }" slim>
      <v-form>
        <founder-info class="mb-4" />

        <beneficiary-info class="mb-4" />

        <service-info class="mb-4" />

        <v-text-field label="月費" />
        <v-text-field label="繳費週期 月繳 季繳 半年 年繳" />
        <v-text-field label="年繳優惠" />
        <v-text-field label="人數（含主揪）" />
        <v-text-field label="信用卡交易費％數" />
        <v-text-field label="信用卡回饋％數" />

        <!--
        應於揪團成功後由主揪提供
        <v-text-field label="登入帳號" />
        <v-text-field label="登入密碼" />
        -->

        <v-btn block color="primary" :disabled="invalid" type="submit">
          創建
        </v-btn>
      </v-form>
    </validation-observer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiCellphoneIphone, mdiEmail } from '@mdi/js'
import BeneficiaryInfo from '~/components/found/form/beneficiary-info.vue'
import FounderInfo from '~/components/found/form/founder-info.vue'
import ServiceInfo from '~/components/found/form/service-info.vue'

export default Vue.extend({
  components: {
    BeneficiaryInfo,
    FounderInfo,
    ServiceInfo,
  },

  data: () => ({
    form: {
      email: '',
      phone: '',
    },
    icons: {
      email: mdiEmail,
      phone: mdiCellphoneIphone,
    },
  }),
})
</script>
