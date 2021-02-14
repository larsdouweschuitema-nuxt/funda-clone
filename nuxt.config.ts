import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Search houses and appartments for sale in the Netherlands [funda]',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Find your new home on funda! Search homes for sale in the Netherlands.'
      }
    ],
  },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/pwa', '@nuxtjs/tailwindcss'],
  components: true,
  pwa: {
    icon: false,
    workbox: {
      /* workbox options */
    }
  },
  loading: false,
  loadingIndicator: false,
  fetch: {
    client: false,
    server: false
  },
  features: {
    store: false,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: true,
    componentAliases: false,
    componentClientOnly: false
  },
  build: {
    indicator: false,
    terser: true
  }
}

export default config