<template>
    <v-container>
      <!-- CONTRIBULATE I would like to dynamically alternate these by nth. -->
      <v-row justify="space-around" class="ma-md-12">
        <v-col cols="12" md="6" align-self="center" class="pa-md-12">
          <v-img
        aspect-ratio="1"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        cover
      ></v-img>
        </v-col>
        <v-col  cols="12" md="6" align-self="center" class="pa-md-12">
            <h3 class="text-h3 mb-6">3 x 3 x 3 = Threes</h3>
            <p class="mb-6">Threes is a Vuetify 3 theme built on top of Vue3 and Nuxt3. Check out the project on github or shoot me an email if you have and requests or suggestion. CTRL+F the word <b>CONTRIBULATE</b> in your code editor to find wishlist features.</p>
            <v-btn color="blue" prepend-icon="mdi-github" variant="tonal" href="https://github.com/silencekillsdesign/Threes" target="_blank">CONTRIBULATE</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>