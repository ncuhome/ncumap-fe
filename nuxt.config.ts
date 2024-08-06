// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  devServer: {
    host: '192.168.0.118',
    port: 3000,
  },

  modules: ["vuetify-nuxt-module"]
})