<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>

    <app-footer />

    <client-only>
      <cookie-disabled-alert />
    </client-only>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppFooter from '~/components/footer/index.vue'
import CookieDisabledAlert from '~/components/cookie-disabled-alert.vue'

export default Vue.extend({
  name: 'DefaultLayout',

  components: {
    AppFooter,
    CookieDisabledAlert,
  },
})
</script>
