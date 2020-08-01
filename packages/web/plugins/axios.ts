import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/axios-accessor'

const axios: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default axios
