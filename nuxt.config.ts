// To Do: Google Fonts, Analytics, Theme, svg support, nuxt content

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
  modules: [
    "@nuxtjs/google-fonts",
    "nuxt-svgo"
  ],
  typescript: { shim: false },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    ssr: { noExternal: ["vuetify"] },
    define: {
      "process.env.DEBUG": false,
    },
  },
  googleFonts: {
    families: {
      Inter: [100,200,300,400,500,600,700,800,900],
      Play: [400,700],
      Anton: [400]
    },
    download: true,
    useStylesheet: true,
  }
  
});
