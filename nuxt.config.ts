// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixins.scss";
            @import "@/assets/scss/_fonts.scss";
            @import "@/assets/scss/_banner.scss";
            @import "@/assets/scss/_button.scss";
          `
        }
      }
    }
  }
})
