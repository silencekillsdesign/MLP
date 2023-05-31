
import { FormsContactForm } from '~~/.nuxt/components';

<template>
    <div>
        <v-main class="fill-height pa-0 ma-0">
            <v-container fluid class="mt-0 border-radius-10">
                <v-parallax
                    height="320"
                    src="/img/mountains.jpg">
                    <v-row align="center" justify="center" class="fill-height my-auto">
                        <h1 class="text-white">in a mess? call wes!</h1>
                    </v-row>
                </v-parallax>
            </v-container>
            <v-container class="fill-height">
                <v-row class="pt-8">
                    <v-col md="4">
                        <v-card color="blue-accent-3" theme="dark">
                        <v-img src="/img/wes.jpg"></v-img>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <!-- <v-avatar
                                class="ma-2"
                                size="120"
                                        rounded="120">
                                        <v-img src="/img/wes.jpg"></v-img>
                                    </v-avatar> -->
                                <div>
                                    <v-card-title class="text-h5 rounded-circle">
                                        McKezie Law, PLLC
                                    </v-card-title>

                                    <v-card-subtitle>Wes McKenzie</v-card-subtitle>

                                    <v-card-actions>
                                        <v-btn
                                            class="ms-2"
                                            variant="outlined"
                                            prepend-icon="mdi-phone"
                                            size="small"
                                            href="tel:6019550080">
                                            601-955-0080
                                        </v-btn>
                                    </v-card-actions>
                                    <v-card-actions>
                                        <v-btn
                                            class="ms-2"
                                            variant="outlined"
                                            prepend-icon="mdi-email"
                                            size="small"
                                            href="mailto:wes@mckenzielaw.com">
                                            wes@mckenzielawpllc.com
                                        </v-btn>
                                    </v-card-actions>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col class="pt-6 contact-body">
                        <v-row class="px-12 contact-body">
                            <p class="mb-4">Remember, if you are facing criminal charges in Montana, it's essential to seek legal representation from an experienced defense lawyer. Do not speak to law enforcement without an attorney present and protect your rights and interests throughout the legal process.</p>
                            <p>Contact us at McKenzie Law today for the legal help you need.</p>
                        </v-row>
                        <FormsContactForm />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<style lang="scss">
.contact-body {
    font-size: 1em;
    line-height: 1.6;
}
</style>