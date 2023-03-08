<template>
    <v-container fluid class="ma-0 pa-0 fill align-center justify-center">
    <v-parallax
        class="hero1 fill-height align-center mt-sm-0 mt-lg-n16"
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-row justify="center">
            <v-card theme="dark" class="bg-transparent pa-10" width="600" >
            <v-row>
                <v-col align="center">
                    <h4 class="text-uppercase text-overline">Welcome to Threes - A starter template for</h4>
                </v-col >
            </v-row>
            <v-row justify="center" class="my-12 text-h1">
                <v-icon dark icon="mdi-vuetify"></v-icon>
                <v-icon icon="mdi-nuxt"></v-icon>
                <v-icon icon="mdi-vuejs"></v-icon>
            </v-row>
            <v-row justify="center" class="mb-6">
                <h1 class="text-uppercase">Vuetify3 + Nuxt3 + Vue3</h1>
            </v-row>
            <v-row justify="center" class="d-flex mt-12">
                <v-btn variant="outlined" class="mx-2">Explore</v-btn>
                <v-btn variant="tonal" class="mx-2">Learn</v-btn>
            </v-row>
        </v-card>
    </v-row>
    </v-parallax>
</v-container>
</template>

<style lang="scss">
.div-test {
    border: 1px solid red;
}

.hero1 {
    font-family: "Inter";

    h1,
    h4 {
        font-weight: 300;
    }

    h4 {}
}

.test {
    border: 1px solid red;
}
</style>