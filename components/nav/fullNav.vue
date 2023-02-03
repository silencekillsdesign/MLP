<template>
    <v-app-bar
      class="px-12"
      color="blue-accent-4"
      flat
      density="compact"
    >
      <v-avatar size="32">
        <v-icon icon="mdi-vuetify" size="large" color="blue"></v-icon>
      </v-avatar>

      <v-spacer></v-spacer>

      <v-tabs right >      
        <v-tab color="white" v-for="link in links" :key="link" :to=link.url>
          {{ link.title }}
          <!-- <nuxt-link :to=link.url>{{ link.title }}</nuxt-link> -->
        </v-tab>
      </v-tabs>

    </v-app-bar>

</template>

<style lang="scss">
h2 {
  font-family: "Poppins";
  font-weight: 900;
}
</style>

<script>
  export default {
    data: () => ({
      links: [
        {
          title: "Home",
          url: "/"
        },
        {
          title: "Gallery",
          url: "/gallery"
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