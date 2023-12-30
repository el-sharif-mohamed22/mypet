<script setup>
import { addPet } from '@/services/petService'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const REDIRECT_DELAY = 1000

const router = useRouter()
const dialog = ref(false)
const dialogMessage = ref('')
const store = useUserStore()

async function submit(pet) {
  try {
    const response = await addPet(store.userId, pet)
    if (response && response.data) {
      dialogMessage.value = 'Pet added successfully!'
      dialog.value = true
      setTimeout(() => {}, REDIRECT_DELAY)
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
    <h1>Add Pet Form</h1>
    <FormKit type="form" submit-label="Add Pet" @submit="submit">
      <FormKit
        label="Pet Name"
        type="text"
        validation="required|length:2,36"
        validation-visibility="dirty"
        name="name"
        id="name"
      />
      <FormKit
        label="Species"
        type="text"
        validation="required|length:2,36"
        validation-visibility="dirty"
        name="species"
        id="species"
      />
      <FormKit
        label="Breed"
        type="text"
        validation="required|length:2,36"
        validation-visibility="dirty"
        name="breed"
        id="breed"
      />
      <FormKit
        label="Age"
        type="number"
        validation="required|integer"
        validation-visibility="dirty"
        name="age"
        id="age"
      />
      <FormKit
        name="gender"
        id="gender"
        type="select"
        label="Gender"
        placeholder="Select Gender"
        validation="required"
        validation-visibility="dirty"
        :options="['Male', 'Female']"
      />
      <FormKit
        label="Health Status"
        type="text"
        validation="required|length:2,36"
        validation-visibility="dirty"
        name="healthStatus"
        id="healthStatus"
      />
      <FormKit
        label="Behaviour"
        type="text"
        validation="required|length:2,36"
        validation-visibility="dirty"
        name="behaviour"
        id="behaviour"
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
