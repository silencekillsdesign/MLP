<template>
  <div>
    <v-main class="fill-height pa-0 ma-0">
      <v-container fluid class="mt-0 mb-16 border-radius-10">
        <v-parallax
          height="320"
          src="/img/mountains.jpg">
          <v-row align="center" justify="center" class="fill-height my-auto">
            <h1 class="text-white">legal services</h1>
          </v-row>
        </v-parallax>
      </v-container>
      <v-container>
        <v-row class="mb-12">
          <p>At McKenzie Law, we understand that being charged with a criminal offense can be a disturbing experience that can impact every aspect of your life. Our defense lawyers will defend you against misdemeanor or felony charges and protect your liberty, financial security, driving privileges, and reputation. We know that the terms of your sentence can have adverse effects on your career, family, education, and immigration status, so we work tirelessly to achieve the best possible outcome for your case.</p>
        </v-row>
        <v-row>
          <v-list lines="one">
            <v-list-item
              v-for="service in services"
              :key="service.title"
              :title="service.title"
              :subtitle="service.subtitle"></v-list-item>
          </v-list>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        title: "DUI",
        subtitle: "Including breath test refusals, enhanced DUI, license suspension and hardship licenses",
        url: "https://vuetifyjs.com",
        icon: "mdi-vuetify",
      },
      {
        title: "Drug Crimes",
        subtitle: "Including possession, sale, distribution, prescription drugs, prescription forgery, possession in a motor vehicle, trafficking, manufacturing, precursors and possession with intent",
        url: "https://vuetifyjs.com",
        icon: "mdi-vuetify",
      },
      {
        title: "White Collar Crimes",
        subtitle: "Including employee theft, embezzlement, money laundering, bribery and fraud",
        url: "https://vuetifyjs.com",
        icon: "mdi-vuetify",
      },
      {
        title: "Property crimes",
        subtitle: "Including robbery, burglary, larceny, identity theft, credit card fraud, forgery, carjacking, auto theft, shoplifting, malicious mischief and receiving stolen property",
        url: "https://vuetifyjs.com",
        icon: "mdi-vuetify",
      },
      {
        title: "Weapons Offenses",
        subtitle: "Including felon in possession of a firearm, carrying without a permit and carrying a concealed weapon or firearm",
        url: "https://vuetifyjs.com",
        icon: "mdi-vuetify",
      },
      {
        title: "Traffic Tickets",
        subtitle: "Including speeding, reckless driving and commercial driving violations",
        url: "https://vuetifyjs.com",
        icon: "mdi-vuetify",
      },
      {
        title: "State and Federal Crimes",
        subtitle: "Including Montana State Laws",
        url: "https://vuetifyjs.com",
        icon: "mdi-vuetify",
      },
      {
        title: "Assault",
        subtitle: "Including simple assault, aggravated assault and assault on a law enforcement officer",
        url: "",
        icon: "mdi-vuetify",
      },
      {
        title: "Homicide",
        subtitle: "Including murder, manslaughter, vehicular manslaughter and DUI death",
        url: "",
        icon: "mdi-vuetify",
      },
      {
        title: "Sex Crimes",
        subtitle: "",
        url: "",
        icon: "mdi-vuetify",
      },
      {
        title: "Appeals",
        subtitle: "",
        url: "",
        icon: "mdi-vuetify",
      },
      {
        title: "Pst-Conviction Relief",
        subtitle: "",
        url: "",
        icon: "mdi-vuetify",
      },
    ]
  })
}
</script>