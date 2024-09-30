// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  devServer: {
    host: '0.0.0.0',  
    port: 3000,        
  },
 
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
            @import "@/assets/scss/_preview.scss";
            @import "@/assets/scss/_card.scss";
            @import "@/assets/scss/_modal.scss";
            @import "@/assets/scss/_footer.scss";
          `
        }
      }
    }
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
        }
      ]
    }
  },
})
