<template>
  <v-footer class="d-flex flex-column position-sticky">
    <div class="bg-blue-accent-4 d-flex w-100 align-center px-12 py-4">
      <strong>Help make Threes even stronger.</strong>
    </div>

    <v-row no-gutters align="center" class="d-flex px-12 py-3 bg-black text-center w-100">
      <v-col>
        <p class="skd-logo-font">
          &copy; {{ new Date().getFullYear() }} — Silence<strong>Kills</strong>Design
        </p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>

        <!-- todo: add tooltips and urls to these -->
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"></v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style lang="scss">
.v-footer {
  padding: 0;
}

.skd-logo-font {
  font-family: Play;
}
</style>
  
<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>