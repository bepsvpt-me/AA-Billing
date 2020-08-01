import { Plugin } from '@nuxt/types'
import VuexPersistence from 'vuex-persist'

const persist: Plugin = ({ store }) => {
  new VuexPersistence({ key: 'aa-billing' }).plugin(store)
}

export default persist
