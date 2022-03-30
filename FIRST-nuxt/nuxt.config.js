import path from 'node:path'
export default {
  head: {
    title: 'FIRST-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/tailwind.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/pwa'],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, 'tailwind.config.js'),
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
