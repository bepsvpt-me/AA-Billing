import { Plugin } from '@nuxt/types'
import VuexPersistence, { PersistOptions } from 'vuex-persist'
// @ts-ignore
import MemoryStorage from 'memorystorage'

const storage = () => {
  try {
    return window.localStorage
  } catch (_) {
    return new MemoryStorage()
  }
}

const persist: Plugin = ({ store }) => {
  const options: PersistOptions<Record<string, any>> = {
    key: 'aa-billing',
    storage: storage(),
  }

  new VuexPersistence(options).plugin(store)
}

export default persist
