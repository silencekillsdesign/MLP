<template>
  <v-container id="cards-gallery" class="my-8">
    <h2 class="text-h3 text-center my-12">Cards Gallery w/ Aspect Ratios</h2>
    <v-container class="px-md-12">
      <v-row>
        <v-col v-for="n in 4" :key="n">
          <BlogCard />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
  