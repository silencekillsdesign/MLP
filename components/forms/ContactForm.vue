<template>
    <v-container>
        <v-form v-model="valid" name="contact" method="POST" data-netlify="true">
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        md="4">
                        <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            :counter="30"
                            label="Your Name"
                            required></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4">
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4">
                        <v-select
                            v-model="role"
                            label="What's Your Role'?"
                            :items="['Developer', 'Desinger', 'Blogger', 'Shaq', 'Other']">
                        </v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea label="Message"></v-textarea>
                    </v-col>
                </v-row>
                <v-btn
                    class="me-4"
                    type="submit">
                    submit
                </v-btn>
            </v-container>
        </v-form>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      role: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is requred.'
        },
        value => {
          if (value?.length <= 30) return true

          return 'Name must be less than 30 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }),
  }
</script>