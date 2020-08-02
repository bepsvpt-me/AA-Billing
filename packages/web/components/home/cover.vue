<template>
  <v-parallax
    v-resize="onResize"
    alt="cover"
    class="cover"
    dark
    :height="height"
    :src="require('~/assets/imgs/cover.webp')"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="text-h2">AA Billing</h1>
        <h4 class="text-h5 mt-4">協助管理您的共享服務帳務</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    height: 500,
  }),

  methods: {
    onResize() {
      this.height = window.innerHeight
    },
  },
})
</script>

<style lang="scss" scoped>
.cover::v-deep {
  .v-parallax__image {
    filter: brightness(50%);
  }
}
</style>
