<template>
  <a
    class="font-weight-medium text-decoration-none"
    :href="href"
    referrerpolicy="no-referrer"
    rel="noopener noreferrer"
    target="_blank"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    href: {
      required: true,
      type: String,
    },
  },
})
</script>
