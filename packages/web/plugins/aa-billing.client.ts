import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { uniqueId } from 'lodash'

const aaBilling: Plugin = (_, inject) => {
  inject(
    'aaBilling',
    new Vue({
      data: () => ({
        timers: new Map(),
      }),

      methods: {
        addTimer(handler: TimerHandler, timeout: number, isInterval = true) {
          const target = isInterval ? window.setInterval : window.setTimeout

          const id = uniqueId('timer-')

          this.timers.set(id, {
            isInterval,
            timerId: target(handler, timeout),
          })

          return id
        },

        removeTimer(id: string) {
          const { isInterval, timerId } = this.timers.get(id)

          this.timers.delete(id)

          if (isInterval) {
            window.clearInterval(timerId)
          } else {
            window.clearTimeout(timerId)
          }
        },
      },
    })
  )
}

export default aaBilling
