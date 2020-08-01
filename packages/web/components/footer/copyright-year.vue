<template>
  <span>{{ currentYear }}</span>
</template>

<script lang="ts">
import Vue from 'vue'
import ms from 'ms'

export default Vue.extend({
  data: () => ({
    timerId: '',
    today: new Date(),
  }),

  computed: {
    currentYear(): number {
      return this.today.getFullYear()
    },

    endOfYear(): Date {
      return this.$dateFns.endOfYear(this.today)
    },

    isEndOfYear(): boolean {
      return this.$dateFns.isSameDay(this.today, this.endOfYear)
    },

    tomorrow(): Date {
      return this.$dateFns.addDays(this.today, 1)
    },
  },

  created() {
    if (this.isEndOfYear) {
      this.timerId = this.$aaBilling.addTimer(this.checkNewDay, ms('1m'))
    }
  },

  methods: {
    checkNewDay() {
      const now = new Date()

      if (!this.$dateFns.isSameDay(now, this.tomorrow)) {
        return
      }

      this.today = now

      this.$aaBilling.removeTimer(this.timerId)
    },
  },
})
</script>
