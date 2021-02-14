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
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  components: true
}

export default config