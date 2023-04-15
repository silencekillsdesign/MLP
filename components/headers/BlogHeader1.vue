<template>
  <v-container fluid>
    <v-row class="space-around">
      <v-col cols="12" md="7" class="pa-md-12">
        <h1 class="text-indigo-accent-4 text-md-large text-xs-medium">What is the Threes Theme for Vuetify and Nuxt?</h1>
        <v-row class="pt-12 align-bottom justify-start">
          <v-col cols="12" md="12">
            <v-btn color="deep-purple-darken-3" prepend-icon="mdi-account" variant="text">CJ Williams</v-btn>
            <v-btn color="deep-purple-darken-3" prepend-icon="mdi-calendar-blank" variant="text">April 1, 2023</v-btn>
            <v-btn color="deep-purple-darken-3" prepend-icon="mdi-share-variant" variant="text">Share</v-btn>
          </v-col>
        </v-row>
        <v-divider color="indigo" class="mt-4" />
        <v-row class="my-6 mx-0">
          <p class="text-subtitle-1">Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>
        </v-row>
        <v-row class="my-4 mx-0">
          <v-btn size="large" variant="tonal" to="#blog-article-1">Keep Reading</v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" md="5" class="pa-4 text-center">
        <img style="max-width: 90%; max-height: 85vh; margin: 0 auto; text-align: center;" src="~/assets/img/dude.png" />
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
</template>


<style lang="scss" scoped>
h1 {
  font-family: Anton;
  font-weight: 700;
  font-size: 5rem;
  line-height: 1.1;
}
</style>