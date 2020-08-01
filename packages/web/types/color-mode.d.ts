import Vue from 'vue'

interface ColorMode extends Vue {
  /**
   * Actual color-mode selected.
   */
  preference: 'system' | 'light' | 'dark'

  /**
   * Color mode has been detected when preference is system.
   */
  value: 'system' | 'light' | 'dark'

  /**
   * Whether if it is during SSR/Generate or not.
   */
  unknown: boolean
}

declare module 'vue/types/vue' {
  interface Vue {
    $colorMode: ColorMode
  }
}
