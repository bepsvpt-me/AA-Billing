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
  data: () => ({
    mediaQuery: window.matchMedia('(prefers-color-scheme: dark)'),
  }),

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
          v === 'system' ? this.mediaQuery.matches : v === 'dark'
      },
      immediate: true,
    },
  },

  created() {
    this.mediaQuery.addListener(this.onChange)
  },

  beforeDestroy() {
    this.mediaQuery.removeListener(this.onChange)
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

    onChange(event: MediaQueryListEvent) {
      if (this.mode === 'system') {
        this.$vuetify.theme.dark = event.matches
      }
    },
  },
})
</script>
