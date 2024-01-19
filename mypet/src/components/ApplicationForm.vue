<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import { applyApplication } from '@/services/applicationService'
const props = defineProps({
  pet: Object
})
const store = useUserStore()
const dialog = ref(false)
const errorMessage = ref('')

const submit = async (data) => {
  try {
    await applyApplication(store.userId, props.pet.petId, data)
    dialog.value = false
    // Reset the error message in case of success
    errorMessage.value = ''
  } catch (error) {
    // Set the error message to display to the user
    errorMessage.value = error.message || 'An error occurred while submitting the application.'
  }
}
</script>

<template>
  <v-btn @click="dialog = true" color="primary">
    Open Dialog
    <v-dialog width="500" v-model="dialog">
      <v-card title="Pet Adoption Application">
        <v-card-text>
          <FormKit type="form" submit-label="Sign up" @submit="submit">
            <FormKit
              name="petCareExperience"
              id="petCareExperience"
              type="select"
              label="What is your experience with pets?"
              placeholder="Select level"
              validation="required"
              validation-visibility="dirty"
              :options="['never had one', 'previous owner', 'current owner', 'breeder']"
            />
            <FormKit
              name="petPreferences"
              id="petPreferences"
              type="select"
              label="What is your preferences in pets?"
              placeholder="Select preference"
              validation="required"
              validation-visibility="dirty"
              :options="['dog', 'cat', 'bird', 'fish', 'reptile', 'rodent', 'other']"
            />
            <FormKit
              name="financialInfo"
              id="financialInfo"
              type="select"
              label="What is your financial info?"
              placeholder="Select preference"
              validation="required"
              validation-visibility="dirty"
              :options="[
                'I can afford a pet',
                'I can afford a pet but I need to save up',
                'I cannot afford a pet'
              ]"
            />
            <FormKit
              name="lifeStyle"
              id="lifeStyle"
              type="select"
              label="What is your lifeStyle?"
              placeholder="Select lifestyle"
              validation="required"
              validation-visibility="dirty"
              :options="[
                'I am a student',
                'I am a worker',
                'I am a housewife',
                'I am a retired person',
                'I am a child'
              ]"
            />
          </FormKit>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close Form" @click="dialog = false"></v-btn>
        </v-card-actions>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </v-card>
    </v-dialog>
  </v-btn>
</template>
