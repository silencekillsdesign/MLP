<template>
    <v-container class="services-home">
        <!-- CONTRIBULATE I would like to dynamically alternate these by nth. -->
        <v-row justify="space-around" class="ma-md-12">
            <v-col cols="12" md="4" align-self="center" class="pa-md-12">
                <h4 class="text-blue-accent-4">support, every step of the way</h4>
                <p class="text-subheading">We understand that each case is as unique as the individuals with whom we work. Our goal in any criminal case is to minimize the negative consequences unique to each of our clients.</p>
            </v-col>
            <v-col align-self="center" class="pa-md-12">
                <v-row no-gutters>
                    <v-col cols="6" class="pa-2" v-for="service in services" :key="service">
                        <v-card class="service-card" prepend-icon="mdi-scale-balance" theme="dark" hover ripple>
                            <v-card-title>
                                {{ service.title }}
                            </v-card-title>

                            <v-card-subtitle>
                                {{ service.subtitle }}
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn :to=service.url>See More</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss">
.services-home {
    font-family: "Inter";
    h4 {
    font-size: 2em;
    line-height: 1.2;
    font-weight: 800;
    }
}
.service-card:hover {
    background-color: #2962FF;
}
</style>

<script >
export default {
    data: () => ({
        services: [
            {
                title: "Violent Offenses",
                subtitle: "Homicide, Assault, Manslaughter, and other offenses",
                url: "/services",
                icon: "mdi-vuetify",
            },
            {
                title: "Non-Violent Offenses",
                subtitle: "Drug Charges, White Collar Crimes, and more.",
                url: "/services",
                icon: "mdi-nuxt",
            },
            {
                img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
                title: "Driving Offenses",
                subtitle: "DUIs, Reckless Driving, Vehicular Manslaughter",
                url: "/services",
                icon: "mdi-vuejs",
            },
            {
                img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
                title: "Appeals",
                subtitle: "Appeals and Post-conviction relief",
                url: "/services",
                icon: "mdi-vuejs",
            },
        ]
    })
}
</script>