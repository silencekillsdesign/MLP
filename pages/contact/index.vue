
import { FormsContactForm } from '~~/.nuxt/components';

<template>
    <v-main class="fill-height">
        <v-container class="fill-height">
            <v-row align="center" justify="center" class="mx-auto mb-10">
                <h1 class="text-h2">Contact Us</h1>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <p>Contact information will go here.</p>
                </v-col>
                <v-col>
                    <FormsContactForm />
                </v-col>
            </v-row>
        </v-container>

    </v-main>
</template>