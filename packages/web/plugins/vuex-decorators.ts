import { Plugin } from '@nuxt/types'
import { config } from 'vuex-module-decorators'

const decorator: Plugin = () => {
  config.rawError = true
}

export default decorator
