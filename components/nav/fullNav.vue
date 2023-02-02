<template>
    <v-app-bar
      class="px-8"
      color="white"
      flat
      density="compact"
    >
      <v-avatar size="32">
        <v-icon icon="mdi-vuetify" size="large" color="blue"></v-icon>
      </v-avatar>

      <v-spacer></v-spacer>

      <v-tabs right color="grey-darken-2">      
        <v-tab v-for="link in links" :key="link">
          {{ link.title }}
        </v-tab>
      </v-tabs>

    </v-app-bar>

</template>

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
          url: "/"
        },
        {
          title: "Contact",
          url: "/"
        },
        
      ],
    }),
  }
</script>