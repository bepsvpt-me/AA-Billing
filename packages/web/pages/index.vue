<template>
  <div>
    <cover />

    <navigation class="mt-6" />

    <v-divider class="mt-6 mb-9" />

    <p class="text-h4 text-center">
      <v-icon color="black" x-large>{{ icon }}</v-icon>
      <span>誰在揪團</span>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiAccountMultiplePlus } from '@mdi/js'
import Cover from '~/components/home/cover.vue'
import Navigation from '~/components/home/navigation.vue'

export default Vue.extend({
  components: {
    Cover,
    Navigation,
  },

  data: () => ({
    icon: mdiAccountMultiplePlus,
  }),

  head: () => ({
    title: 'AA Billing - 共享服務帳務管理平台',
  }),
})
</script>
