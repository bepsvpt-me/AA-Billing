import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'setting',
  stateFactory: true,
  namespaced: true,
})
export default class SettingModule extends VuexModule {
  dark: boolean | undefined = undefined

  @Mutation
  setDark(value?: boolean) {
    this.dark = value
  }
}
