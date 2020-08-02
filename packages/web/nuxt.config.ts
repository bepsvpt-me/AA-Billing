import { NuxtConfig } from '@nuxt/types'
import { IconsOptions } from 'vuetify/types/services/icons'

require('dotenv').config()

const isDev = process.env.NODE_ENV !== 'production'

export default {
  // https://nuxtjs.org/api/configuration-mode
  mode: 'universal',

  // https://nuxtjs.org/api/configuration-modern
  modern: !isDev,

  // https://nuxtjs.org/api/configuration-target
  target: 'server',

  // https://nuxtjs.org/api/configuration-vue-config
  vue: {
    config: {
      devtools: true,
    },
  },

  // https://nuxtjs.org/api/configuration-head
  head: {
    titleTemplate: '%s - AA Billing',
    title: 'AA Billing',
  },

  // https://nuxtjs.org/api/configuration-css
  css: ['~/assets/css/app.scss'],

  // https://nuxtjs.org/api/configuration-components
  components: false,

  // https://nuxtjs.org/api/configuration-loading
  loading: false,

  // https://nuxtjs.org/api/configuration-loading-indicator
  loadingIndicator: false,

  // https://nuxtjs.org/api/configuration-plugins
  plugins: [
    '~/plugins/aa-billing.client',
    '~/plugins/axios',
    '~/plugins/vuex-decorators',
    '~/plugins/vuex-persist.client',
  ],

  // https://nuxtjs.org/api/configuration-modules
  modules: [
    '@nuxtjs/amp',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/device',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    // '@nuxtjs/sitemap',
    '@nuxtjs/universal-storage',
  ],

  // https://nuxtjs.org/api/configuration-modules#-code-buildmodules-code-
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/date-fns',
    '@nuxtjs/dotenv',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@mole-inc/nuxt-validate',
  ],

  // https://dev.auth.nuxtjs.org
  auth: {},

  // https://axios.nuxtjs.org
  axios: {},

  // https://github.com/nuxt-community/date-fns-module
  dateFns: {
    defaultLocale: 'zh-TW',
  },

  // https://github.com/nuxt-community/dotenv-module
  dotenv: {
    filename: isDev ? '.env' : '.env.prod',
  },

  // https://github.com/mole-inc/nuxt-validate
  nuxtValidate: {
    lang: 'zh_TW',
  },

  // https://github.com/nuxt-community/sentry-module
  sentry: {
    dsn: '',
    config: {},
  },

  // https://github.com/nuxt-community/sitemap-module
  sitemap: {},

  // https://github.com/nuxt-community/vuetify-module
  vuetify: {
    defaultAssets: false,
    frameworkOptions: {
      icons: {
        iconfont: 'mdiSvg',
      } as Partial<IconsOptions>,
    },
  },

  // https://nuxtjs.org/api/configuration-build
  build: {},
} as NuxtConfig
