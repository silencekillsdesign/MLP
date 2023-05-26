<template>
  <v-footer class="position-sticky">    
    <v-row no-gutters align="center" class="px-12 py-5  bg-black w-100 justify-space-between">
      <v-col>
        <p class="skd-logo-font">
          &copy; {{ new Date().getFullYear() }} — McKenzie Law. 
        </p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="justify-right">
        <v-row class="justify-right">
        <v-btn          
          class="mx-4"
          target="_blank"
          icon="mdi-email"
          href="mailto:wes@mckenzielaw.com"
          variant="plain"
          >wes@mckenzielaw.com</v-btn>
        </v-row>
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
