<template>
    <v-row no-gutters class="hero1">
        <v-parallax
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-container class="pa-12 mx-auto mt-16">
                <v-row align="center" justify="center">
                    <h4 class="text-uppercase text-overline">Welcome to Threes - A starter template for</h4>
                </v-row>
                <v-row align="center" justify="center" class="my-10">
                    <h2 class="text-h1 mb-4">
                        <v-icon icon="mdi-vuetify"></v-icon>
                        <v-icon icon="mdi-nuxt"></v-icon>
                        <v-icon icon="mdi-vuejs"></v-icon>
                    </h2>
                </v-row>
                <v-row align="center" justify="center" class="mb-6">
                    <h1 class="text-uppercase">Vuetify 3 + Nuxt 3 + Vue 3</h1>
                </v-row>
                <v-row align="center" justify="center" class="d-flex mt-12">
                    <v-btn variant="outlined" class="mx-2">Explore</v-btn>  
                    <v-btn variant="tonal" class="mx-2">Contact</v-btn>
                </v-row>
            </v-container>
        </v-parallax>
    </v-row>
</template>

<style lang="scss">

.hero1 {
    font-family: "Inter";
    h1, h4 {       
        font-weight: 300;
    }
    h4 {}
}

.test {
    border: 1px solid red;
}
</style>