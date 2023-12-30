<script setup>
import { staffSignUp, adopterSignUp } from '@/services/authenticationService'
import { getSheltersAsOptions } from '@/services/shelterService'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseAppBar from '@/components/BaseAppBar.vue'
import { useUserStore } from '@/store/user'

const REDIRECT_DELAY = 1000
const store = useUserStore()
const router = useRouter()
const dialog = ref(false)
const dialogMessage = ref('')
const shelters = []
shelters.value = await getSheltersAsOptions()

async function submit(credentials) {
  try {
    if (store.userType === 'Staff') {
      await staffSignUp(credentials)
    } else if (store.userType === 'User') {
      await adopterSignUp(credentials)
    }
    dialogMessage.value = "You've signed up successfully!"
    dialog.value = true
    setTimeout(() => {
      router.replace('/SignIn')
    }, REDIRECT_DELAY)
  } catch (err) {
    dialogMessage.value = err.response.data
    dialog.value = true
  }
}
</script>

<template>
  <v-layout class="rounded rounded-md">
    <BaseAppBar />
    <v-main>
      <div class="sign-form">
        <img
          src="https://www.mypet.com/wp-content/uploads/sites/352/2023/04/MyPet-logov21.jpg"
          alt="FormKit Logo"
          width="244"
          height="50"
          class="logo"
        />
        <v-card-title class="text-center">{{ store.userType }} Sign Up </v-card-title>
        <FormKit type="form" submit-label="Sign up" @submit="submit">
          <FormKit
            label="Full Name"
            type="text"
            validation="required|length:8,36|alpha_spaces:latin"
            validation-visibility="dirty"
            name="name"
            id="name"
            placeholder="John Doe"
            help="Your full name as it appears on your passport."
          />
          <FormKit
            placeholder="email@csed.eg"
            type="email"
            label="Email address"
            validation="email|required|ends_with:@csed.eg"
            validation-visibility="dirty"
            help="Email must belong to the @csed.eg"
            name="email"
            id="email"
          />
          <FormKit
            placeholder="email@alexu.edu.eg"
            type="email"
            label="Confirm Email address"
            validation="required|confirm"
            validation-visibility="dirty"
            validation-label="Confirmation"
            id="email_confirm"
            name="email_confirm"
          />
          <FormKit
            type="password"
            label="Password"
            validation="required|length:8,36"
            validation-visibility="dirty"
            name="password"
            id="password"
          />
          <FormKit
            type="password"
            label="Confirm password"
            validation="required|confirm"
            validation-visibility="dirty"
            validation-label="Confirmation"
            name="password_confirm"
            id="password_confirm"
          />
          <FormKit
            name="phone"
            id="phone"
            type="tel"
            label="Contact Number"
            placeholder="+201xxxxxxxxx"
            validation="matches:/^01[0125][0-9]{8}$/"
            :validation-messages="{
              matches: 'Phone number must be in the format xxx-xxx-xxxx'
            }"
            validation-visibility="dirty"
          />
          <FormKit
            v-if="store.userType === 'Staff'"
            name="shelter"
            id="shelter"
            type="select"
            label="Which Shelter do you want to join?"
            placeholder="Select Shelter"
            validation="required"
            validation-visibility="dirty"
            :options="shelters.value"
          />
          <FormKit
            v-if="store.userType === 'Staff'"
            name="role"
            id="role"
            type="select"
            label="What is your role?"
            placeholder="Select Role"
            validation="required"
            validation-visibility="dirty"
            :options="['veterinarian', 'receptionist', 'support']"
          />
        </FormKit>
      </div>
      <v-dialog v-model="dialog" width="auto">
        <v-card>
          <v-card-text>
            {{ dialogMessage }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Understand</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-layout>
</template>

<style scoped>
.sign-form {
  width: calc(100% - 2em);
  max-width: 480px;
  box-sizing: border-box;
  padding: 2em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  margin: 4em auto;
}

.logo {
  width: 250px;
  height: auto;
  display: block;
  margin: 0 auto 2em auto;
}
</style>
@/services/authenticationService
