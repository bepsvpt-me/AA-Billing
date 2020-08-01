import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import setting from '~/store/setting'

// eslint-disable-next-line import/no-mutable-exports
let settingStore: setting

function initialiseStores(store: Store<any>): void {
  settingStore = getModule(setting, store)
}

export { initialiseStores, settingStore }
