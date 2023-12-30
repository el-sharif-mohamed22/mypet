<script setup>
import { staffSignIn, adopterSignIn } from '@/services/authenticationService'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import BaseAppBar from '@/components/BaseAppBar.vue'
import { logIn } from '@/services/adminService'

const REDIRECT_DELAY = 1000

const router = useRouter()
const dialog = ref(false)
const dialogMessage = ref('')

const store = useUserStore()

async function submit(credentials) {
  try {
    if (store.userType === 'Staff') {
      const response = await staffSignIn(credentials)
      store.userId = response.data
    } else if (store.userType === 'User') {
      const response = await adopterSignIn(credentials)
      store.userId = response.data
    } else if (store.userType === 'Admin') {
      const response = await logIn(credentials)
      store.userId = response.data
    }

    dialogMessage.value = "You've signed in successfully!"
    dialog.value = true
    setTimeout(() => {
      if (store.userType === 'Staff') router.replace('/StaffHome')
      else if (store.userType === 'User') router.replace('/AdopterHome')
      else if (store.userType === 'Admin') router.replace('/AdminHome')
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
        <v-card-title class="text-center">{{ store.userType }} Sign In </v-card-title>
        <FormKit type="form" submit-label="Sign in" @submit="submit">
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
            type="password"
            label="Password"
            validation="required|length:8,36"
            validation-visibility="dirty"
            name="password"
            id="password"
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
