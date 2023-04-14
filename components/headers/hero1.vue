<template>
     <v-container fluid  class="ma-0 pa-0">
      <v-window v-model="onboarding">
        <v-window-item
          v-for="n in length"
          :key="`card-${n}`"
          :value="n"
        >
          <v-card class="d-flex justify-end align-end" height="550">
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" cover class="justify-center align-center">
            <span class="text-h2">
              Card {{ n }}
            </span>
            <v-spacer></v-spacer>
            <v-card-actions class="justify-space-between align-self-end">
        <v-btn
          variant="plain"
          icon="mdi-chevron-left"
          @click="prev"
        ></v-btn>
        <v-item-group
          v-model="onboarding"
          class="text-center"
          mandatory
        >
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ isSelected, toggle }"
            :value="n"
          >
            <v-btn
              :variant="isSelected ? 'outlined' : 'text'"
              icon="mdi-record"
              @click="toggle"
            ></v-btn>
          </v-item>
        </v-item-group>
        <v-btn
          variant="plain"
          icon="mdi-chevron-right"
          @click="next"
        ></v-btn>
      </v-card-actions>
        </v-img>

        
          </v-card>
        </v-window-item>
       
      </v-window>

     </v-container>
  </template>

<script>
  export default {
    data: () => ({
      length: 3,
      onboarding: 0,
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 > this.length
          ? 1
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 <= 0
          ? this.length
          : this.onboarding - 1
      },
    },
  }
</script>