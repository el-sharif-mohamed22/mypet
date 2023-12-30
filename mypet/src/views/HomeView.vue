<script setup>
import { useRouter } from 'vue-router'
import BaseAppBar from '@/components/BaseAppBar.vue'
import { useUserStore } from '@/store/user'
const router = useRouter()
const store = useUserStore()

const goToSignIn = (userType) => {
  store.userId = null
  store.userType = userType
  router.replace('/SignIn')
}

const goToSignUp = (userType) => {
  store.userId = null
  store.userType = userType
  router.replace('/SignUp')
}
</script>

<template>
  <v-layout class="rounded rounded-md">
    <BaseAppBar />

    <v-main>
      <v-img src="../assets/svg.svg">
        <v-container fluid class="fill-height">
          <v-row justify="space-evenly" align="center">
            <!-- Adopter Card -->
            <v-card width="600" color="#EEF5FF">
              <v-img height="300" src="../assets/adoption.jpg" cover class="text-white"> </v-img>

              <v-card-text>
                <div class="font-weight-bold ms-1 mb-2">Want to join as an adopter?</div>
                <v-btn @click="goToSignUp('User')" color="teal-darken-4">Join</v-btn>
                <v-btn @click="goToSignIn('User')" color="teal-darken-2">Sign In</v-btn>
              </v-card-text>
            </v-card>

            <!-- Staff Card -->
            <v-card width="600" color="#EEF5FF">
              <v-img height="300" src="../assets/staff.webp" cover class="text-white"> </v-img>

              <v-card-text>
                <div class="font-weight-bold ms-1 mb-2">Want to join as a staff member?</div>
                <v-btn @click="goToSignUp('Staff')" color="teal-darken-4">Join</v-btn>
                <v-btn @click="goToSignIn('Staff')" color="teal-darken-3">Sign In</v-btn>
                <v-btn @click="goToSignIn('Admin')" color="teal-darken-1">Admin?</v-btn>
              </v-card-text>
            </v-card>
          </v-row>
        </v-container>
      </v-img>
    </v-main>
  </v-layout>
</template>

<style scoped>
.v-btn {
  margin-right: 10px;
}
</style>
