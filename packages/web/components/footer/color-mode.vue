<template>
  <v-btn class="text-capitalize" depressed rounded @click="next">
    <v-icon>{{ icon }}</v-icon>
    <span class="ml-2">{{ mode }}</span>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiMonitor, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'

export default Vue.extend({
  computed: {
    icon(): string {
      switch (this.mode) {
        case 'light':
          return mdiWeatherSunny

        case 'dark':
          return mdiWeatherNight

        default:
          return mdiMonitor
      }
    },

    mode(): string {
      const dark = this.$store.state.setting.dark

      if (dark === undefined) {
        return 'system'
      }

      return dark ? 'dark' : 'light'
    },
  },

  watch: {
    mode: {
      handler(v: string) {
        this.$vuetify.theme.dark =
          v === 'system' ? this.$colorMode.value !== 'light' : v === 'dark'
      },
      immediate: true,
    },
  },

  methods: {
    next() {
      let dark

      if (this.mode === 'light') {
        dark = true
      } else if (this.mode === 'system') {
        dark = false
      }

      this.$store.commit('setting/setDark', dark)
    },
  },
})
</script>
