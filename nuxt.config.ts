import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  components: true
}

export default config