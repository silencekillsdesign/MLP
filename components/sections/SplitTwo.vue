<template>
  <v-container>
    <!-- CONTRIBULATE I would like to dynamically alternate these by nth. -->
    <v-row justify="space-around" class="ma-md-12">
      <v-col cols="12" md="6" align-self="center" class="pa-md-12">
        <h3 class="mb-6">We stand for Justice.</h3>
        <p class="mb-6">At McKenzie Law, not only do we know how to protect your rights, but we also specialize in understanding laws specific to the City of Bozeman, surrounding areas and the State of Montana.</p>
        <v-btn color="blue" prepend-icon="mdi-handshake-outline" variant="outlined" to="/about">Meet McKenzie Law</v-btn>
      </v-col>
      <v-col cols="12" md="6" align-self="center" class="pa-md-12">
        <v-img
          aspect-ratio="1"
          src="/img/pillars.png"
          cover></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
h3 {
  font-family: "Inter";
  font-size: 2em;
  line-height: 1.2;
  font-weight: 800;
}
</style>