<template>
  <v-text-field
    v-bind="$attrs"
    class="number-input"
    type="number"
    :value="value"
    @input="$emit('input', $event)"
    @keydown.down.prevent=""
    @keydown.up.prevent=""
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      required: true,
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped>
.number-input::v-deep input[type='number'] {
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
