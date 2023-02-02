<template>
  <v-container id="cards-gallery" class="my-8">
    <h2 class="text-h3 text-center my-12">Cards Gallery w/ Aspect Ratios</h2>
    <v-row>
      <v-col v-for="n in 9" :key="n" cols="4">
        <v-card aspect-ratio="16/9">
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" cover></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
