<template>
  <v-container class="my-8">
    <h2 class="text-h3 text-center my-12">Cards Gallery w/ Aspect Ratios</h2>
    <v-container class="px-md-12">
      <v-row>
        <v-col v-for="card in cards" :key="card">
          <v-card  class="">
            <v-img :src="card.img" height="200" cover>
              <v-container align="center" class="fill-height my-auto">
                <v-icon color="white" size="140"  :href="card.url">{{  card.icon }}</v-icon>                
              </v-container>
            </v-img>

            <v-card-title>
              {{ card.title }}
            </v-card-title>

            <v-card-subtitle>
              {{  card.subtitle }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn :append-icon="card.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="card.show = !card.show">Preview</v-btn>

              <v-spacer></v-spacer>

              <v-btn icon size="small" variant="flat" :href="card.url">
                <v-icon>{{ card.icon }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="card.show">
                <v-divider></v-divider>

                <v-card-text class="ma-3">
                  <v-row>{{ card.excerpt }}</v-row> 
                  <v-row class="mt-8"><v-btn variant="outlined" :href="card.url" target="_blank">View Docs</v-btn></v-row>
                </v-card-text>
                
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
  
<script >
export default {
data: () => ({
  cards: [
    {
      show: false,
      img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      title: "Vuetify 3",
      subtitle: "Beautifully Handcrafted UI Library",
      url: "https://vuetifyjs.com",
      icon: "mdi-vuetify",
      excerpt: "Vuetify is a collection of pre-made components paired with powerful features such dynamic themes, global defaults, application layouts, and more."
    },
    {
      img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      title: "Nuxt 3",
      subtitle: "Application Launch Pad",
      url: "https://nuxt.com/",
      icon: "mdi-nuxt",
      excerpt: "Nuxt provides both frontend and backend functionality so you can focus on what matters: Creating your web application."
    },
    {
      img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      title: "Vue 3",
      subtitle: "The Guts of the Glory",
      url: "https://vuetifyjs.com",
      icon: "mdi-vuejs",
      excerpt: "An approachable, performant and versatile framework for building web user interfaces."
    },
  ]
})}
</script>