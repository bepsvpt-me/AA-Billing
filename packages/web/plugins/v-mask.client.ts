import Vue from 'vue'
import { Plugin } from '@nuxt/types'
// @ts-ignore
import { VueMaskDirective } from 'v-mask'

const decorator: Plugin = () => {
  Vue.directive('mask', VueMaskDirective)
}

export default decorator
