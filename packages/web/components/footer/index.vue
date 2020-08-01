<template>
  <v-footer>
    <v-col cols="2">
      <color-mode />
    </v-col>

    <v-spacer />

    <v-col cols="auto">
      <span>bepsvpt</span>
      <span>©</span>
      <copyright-year />
    </v-col>

    <v-spacer />

    <v-col class="text-right" cols="2">
      <v-btn
        href="https://github.com/bepsvpt-me/AA-Billing"
        icon
        referrerpolicy="no-referrer"
        rel="noopener noreferrer"
        target="_blank"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiGithub } from '@mdi/js'
import ColorMode from './color-mode.vue'
import CopyrightYear from './copyright-year.vue'

export default Vue.extend({
  components: {
    ColorMode,
    CopyrightYear,
  },

  data: () => ({
    icon: mdiGithub,
  }),
})
</script>
