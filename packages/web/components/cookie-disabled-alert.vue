<template>
  <v-snackbar v-if="open" bottom color="error" timeout="-1" :value="true">
    <span>您的瀏覽器已停用 Cookie，網站部分功能可能無法正常運作。</span>

    <external-link v-if="link" class="link" :href="link">
      了解詳情
    </external-link>

    <template #action="{ attrs }">
      <v-btn text v-bind="attrs" @click="open = false">
        關閉
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue'
import ExternalLink from '~/components/external-link.vue'

export default Vue.extend({
  components: {
    ExternalLink,
  },

  data() {
    return {
      open: !window.navigator.cookieEnabled,
    }
  },

  computed: {
    link(): string | undefined {
      // @ts-ignore
      switch (this.$ua.browser().toLowerCase()) {
        case 'chrome':
          return 'https://support.google.com/chrome/answer/95647?hl=zh-Hant'

        case 'safari':
          return 'https://support.apple.com/zh-tw/guide/safari/sfri11471/mac'

        case 'firefox':
          return 'https://support.mozilla.org/zh-TW/kb/websites-say-cookies-are-blocked-unblock-them'

        default:
          return undefined
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.link {
  color: #1867c0;
}
</style>
