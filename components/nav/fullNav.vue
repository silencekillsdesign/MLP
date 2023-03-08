<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard" :value="link.url" v-for="link in links" :key="link" :to=link.url>{{ link.title }}</v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar class="px-lg-12 px-sm-2" position-sticky color="blue-accent-4" >
    <v-app-bar-title >
      <v-btn variant="text" to="/">
      <v-icon icon="mdi-vuetify" size="large" color="white"></v-icon>
      <v-icon icon="mdi-nuxt" size="large" color="white"></v-icon>
      <v-icon icon="mdi-vuejs" size="large" color="white"></v-icon>
      </v-btn>
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn @click="toggleTheme" icon="mdi-theme-light-dark" class="mr-3"></v-btn>
    <v-tabs right class="d-none d-lg-block">
      <v-tab color="white" v-for="link in links" :key="link" :to=link.url> {{ link.title }} </v-tab>      
    </v-tabs>

    <v-app-bar-nav-icon class="d-lg-none" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>    
  </v-app-bar>
</template>

<style lang="scss">
h2 {
  font-family: "Poppins";
  font-weight: 900;
}
</style>

<script>
import { useTheme } from 'vuetify'

export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
  data: () => ({
    drawer: null,
    links: [
      {
        title: "Home",
        url: "/",
        icon: "mdi-home"
      },
      {
        title: "Gallery",
        url: "/gallery",
        icon: "mdi-home"
      },
      {
        title: "About",
        url: "/about"
      },
      {
        title: "Contact",
        url: "/contact"
      },

    ],
  }),
}
</script>