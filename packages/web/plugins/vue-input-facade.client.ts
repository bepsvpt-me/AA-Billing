import Vue from 'vue'
import { Plugin } from '@nuxt/types'
// @ts-ignore
import { facade } from 'vue-input-facade'

const mask: Plugin = () => {
  Vue.directive('facade', facade)
}

export default mask
