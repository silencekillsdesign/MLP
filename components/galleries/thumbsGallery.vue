<template>
    <section id="thumbs-gallery" class="my-8">

        <h2 class="text-h3 text-center my-12">Thumbnail Gallery w/ Sections</h2>

        <v-row>
            <template v-for="n in 3" :key="n">
                <v-col
                    class="mt-2"
                    cols="12">
                    <strong>Category {{ n }}</strong>
                </v-col>

                <v-col
                    v-for="j in 6"
                    :key="`${n}${j}`"
                    cols="6"
                    md="2">
                    <!-- <v-sheet height="150"></v-sheet>   -->
                    <v-img
                        aspect-ratio="1"
                        :src="`https://picsum.photos/500/500?image=${j * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${j * 5 + 12}`"
                        cover
                        class="bg-grey-lighten-2"></v-img>

                </v-col>
            </template>
        </v-row>
    </section>
</template>