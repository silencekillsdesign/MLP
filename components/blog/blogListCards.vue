<template>
    <v-container id="cards-gallery" class="my-8">
      <h2 class="text-h3 text-center my-12">Cards Gallery w/ Aspect Ratios</h2>
      <v-row>
        <v-col v-for="n in 3" :key="n">
          <BlogCard />
        </v-col>
      </v-row>
    </v-container>
  </template>
  