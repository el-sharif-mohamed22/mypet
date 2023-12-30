<script setup>
import { addShelter } from '@/services/adminService'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const REDIRECT_DELAY = 1000

const router = useRouter()
const dialog = ref(false)
const dialogMessage = ref('')
const store = useUserStore()

async function submit(shelter) {
  try {
    const response = await addShelter(store.userId, shelter)
    if (response && response.data) {
      dialogMessage.value = 'Shelter added successfully!'
      dialog.value = true
      setTimeout(() => {
        location.reload()
      }, REDIRECT_DELAY)
    } else {
      throw new Error('No response from the server')
    }
  } catch (err) {
    dialogMessage.value = err.message
    dialog.value = true
  }
}
</script>

<template>
  <div class="sign-form">
    <h1>Add Shelter From</h1>
    <FormKit type="form" submit-label="Add Shelter" @submit="submit">
      <FormKit
        label="Shelter Name"
        type="text"
        validation="required|length:6,36"
        validation-visibility="dirty"
        name="name"
        id="name"
      />
      <FormKit
        name="location"
        id="location"
        type="select"
        label="Location"
        placeholder="Select Location"
        validation="required"
        validation-visibility="dirty"
        :options="[
          'Alexandria',
          'Assiut',
          'Aswan',
          'Beheira',
          'Bani Suef',
          'Cairo',
          'Daqahliya',
          'Damietta',
          'Fayyoum',
          'Gharbiya',
          'Giza',
          'Helwan',
          'Ismailia',
          'Kafr El Sheikh',
          'Luxor',
          'Marsa Matrouh',
          'Minya',
          'Monofiya',
          'New Valley',
          'North Sinai',
          'Port Said',
          'Qalioubiya',
          'Qena',
          'Red Sea',
          'Sharqiya',
          'Sohag',
          'South Sinai',
          'Suez'
        ]"
      />
      <FormKit
        name="contact"
        id="contact"
        type="tel"
        label="Contact Number"
        placeholder="+201xxxxxxxxx"
        validation="matches:/^01[0125][0-9]{8}$/"
        :validation-messages="{
          matches: 'Contact number must be in the format xxx-xxx-xxxx'
        }"
        validation-visibility="dirty"
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
</style>
