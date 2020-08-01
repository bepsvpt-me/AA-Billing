<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>

    <app-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppFooter from '~/components/footer/index.vue'

export default Vue.extend({
  components: {
    AppFooter,
  },
})
</script>
