<template>
    <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        hide-delimiters
        show-arrows="hover">
        <v-carousel-item
            v-for="testimonial in testimonials" :key="testimonial">
            <v-sheet
                :color="testimonial.color"
                height="100%">
                <v-container class="d-flex fill-height">
                    <v-row  class="align-content-center justify-center align-content-center">                        
                    <h5 class="text-h5 mb-10">{{ testimonial.testimony }}</h5>
                    <p class="text-overline font-weight-bold">{{ testimonial.name }}</p>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data() {
        return {
            testimonials: [
                {
                    testimony: "I was facing a serious charge and was scared for my future until I hired Wes. He worked tirelessly to build a strong defense for me and never gave up on my case. Thanks to his expertise and dedication, I received a reduced sentence that allowed me to move on with my life.",
                    name: "Ethan",
                    color: "indigo",
                    avatar: "",
                },
                {
                    testimony: "I highly recommend McKenzie Law for legal defense in Bozeman. He was professional and empathetic throughout the entire process and made me feel like I had someone in my corner. His legal knowledge and strategic approach to my case resulted in a positive outcome, and I couldn't be more grateful.",
                    name: "Olivia",
                    color: "red",
                    avatar: "",
                },
                {
                    testimony: "I can't thank Wes enough for the outstanding representation he provided me during a difficult time. His attention to detail and ability to navigate complex legal issues was impressive. I felt like I had a strong advocate on my side and his efforts resulted in a dismissal of my charges. I would recommend him to anyone in need of a defense lawyer in Bozeman.",
                    name: "Liam",
                    color: "pink",
                    avatar: "",
                },
                {
                    testimony: "I was charged with a DUI in Bozeman and was nervous about the potential consequences. After hiring McKenzie Law, I knew I was in good hands. They were thorough in their investigatio, provided clear communication throughout the process, and achieved a positive outcome for me. I couldn't have asked for a better defense lawyer.",
                    name: "Ava",
                    color: "blue",
                    avatar: "",
                },
            ]
        }
    },
}
</script>