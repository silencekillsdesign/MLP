<template>
  <v-container id="cards-gallery" class="my-8">
    <h2 class="text-h3 text-center my-12">Cards Gallery w/ Aspect Ratios</h2>
    <v-row>
      <v-col v-for="service in services" :key="service" cols="6" md="3">
        <v-card aspect-ratio="16/9">
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" cover>{{ service.title }}</v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
data: () => ({
  services: [
    {
      img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      title: "Vuetify 3",
      subtitle: "Beautifully Handcrafted UI Library",
      url: "https://vuetifyjs.com",
      icon: "mdi-vuetify",
      excerpt: "Vuetify is a collection of pre-made components paired with powerful features such dynamic themes, global defaults, application layouts, and more."
    },
    {
      img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      title: "Vuetify 3",
      subtitle: "Beautifully Handcrafted UI Library",
      url: "https://vuetifyjs.com",
      icon: "mdi-vuetify",
      excerpt: "Vuetify is a collection of pre-made components paired with powerful features such dynamic themes, global defaults, application layouts, and more."
    },
    {
      img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      title: "Vuetify 3",
      subtitle: "Beautifully Handcrafted UI Library",
      url: "https://vuetifyjs.com",
      icon: "mdi-vuetify",
      excerpt: "Vuetify is a collection of pre-made components paired with powerful features such dynamic themes, global defaults, application layouts, and more."
    },
    {
      img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      title: "Vuetify 3",
      subtitle: "Beautifully Handcrafted UI Library",
      url: "https://vuetifyjs.com",
      icon: "mdi-vuetify",
      excerpt: "Vuetify is a collection of pre-made components paired with powerful features such dynamic themes, global defaults, application layouts, and more."
    },
    {
      img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      title: "Vuetify 3",
      subtitle: "Beautifully Handcrafted UI Library",
      url: "https://vuetifyjs.com",
      icon: "mdi-vuetify",
      excerpt: "Vuetify is a collection of pre-made components paired with powerful features such dynamic themes, global defaults, application layouts, and more."
    },
    {
      img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      title: "Vuetify 3",
      subtitle: "Beautifully Handcrafted UI Library",
      url: "https://vuetifyjs.com",
      icon: "mdi-vuetify",
      excerpt: "Vuetify is a collection of pre-made components paired with powerful features such dynamic themes, global defaults, application layouts, and more."
    },
    {
      img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      title: "Vuetify 3",
      subtitle: "Beautifully Handcrafted UI Library",
      url: "https://vuetifyjs.com",
      icon: "mdi-vuetify",
      excerpt: "Vuetify is a collection of pre-made components paired with powerful features such dynamic themes, global defaults, application layouts, and more."
    },
    {
      img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      title: "Vuetify 3",
      subtitle: "Beautifully Handcrafted UI Library",
      url: "https://vuetifyjs.com",
      icon: "mdi-vuetify",
      excerpt: "Vuetify is a collection of pre-made components paired with powerful features such dynamic themes, global defaults, application layouts, and more."
    }
  ]
})
}

</script>