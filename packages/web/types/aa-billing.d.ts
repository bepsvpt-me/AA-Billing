import Vue from 'vue'

interface Timer {
  isInterval: boolean

  timerId: number
}

interface AaBilling extends Vue {
  timers: Map<string, Timer>

  addTimer: (
    handler: TimerHandler,
    timeout: number,
    isInterval?: boolean
  ) => string

  removeTimer: (id: string) => void
}

declare module 'vue/types/vue' {
  interface Vue {
    $aaBilling: AaBilling
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $aaBilling: AaBilling
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $aaBilling: AaBilling
  }
}
