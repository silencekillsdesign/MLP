<template>
  <v-app class="ma-0 pa-0">    
    <v-container fluid class="ma-0 pa-0 fill-height">
      <nav-full-nav></nav-full-nav>
      <nuxt-page></nuxt-page>      
    </v-container>
    <sections-footer></sections-footer>
  </v-app>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  }
}
</script>