<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard" :value="link.url" v-for="link in links" :key="link" :to=link.url>{{ link.title }}</v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar density="compact" position-sticky color="blue-accent-4" class="mb-12">
    <v-app-bar-title >
      <!-- <v-btn variant="text" to="/">McKenzie Law</v-btn> -->
      <v-img class="ml-n4 ml-md-n12" height="30px" src="/logo.png"></v-img>
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
        title: "Services",
        url: "/services",
        icon: "mdi-home"
      },
      {
        title: "About",
        url: "/about"
      },
      {
        title: "Contact",
        url: "/contact"
      }
    ]
  })
}
</script>