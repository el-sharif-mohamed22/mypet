<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
const store = useUserStore()

const router = useRouter()

const goHome = () => {
  router.replace('/')
  store.userId = null
  store.userType = null
}
const props = defineProps({
  title: {
    type: String,
    default: 'MyPet'
  }
})
</script>

<template>
  <v-app-bar color="teal-darken-4" image="/src/assets/appBar.jpg">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>
    <v-btn icon>
      <v-icon @click="goHome()">mdi-home</v-icon>
    </v-btn>

    <v-app-bar-title> {{ props.title }} </v-app-bar-title>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>
