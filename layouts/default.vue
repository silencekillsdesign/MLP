<template>
    <NavFullNav />
    <v-main>
        <v-container fluid class="ma-0 pa-0">
            <slot></slot>
        </v-container>
    </v-main>
    <SectionsPreFooter />
    <SectionsFooter />
</template>