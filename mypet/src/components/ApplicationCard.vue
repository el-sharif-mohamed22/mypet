<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { acceptApplication, rejectApplication } from '@/services/applicationService.js'
import { useUserStore } from '@/store/user'

const store = useUserStore()
const props = defineProps({
  application: Object
})
const emits = defineEmits(['update-list'])

const isComponentVisible = ref(true)

const accept = async () => {
  await acceptApplication(props.application.applicationId, store.userId)
  emits('update-list')
}

const reject = async () => {
  await rejectApplication(props.application.applicationId, store.userId)
  emits('update-list')
}
</script>

<template>
  <v-card v-if="isComponentVisible" class="mx-auto my-3" max-width="344" elevation="2">
    <v-card-title class="justify-space-between">
      Application {{ props.application.applicationId }}
      <span :class="`status ${props.application.status.toLowerCase()}`">{{ props.application.status }}</span>
    </v-card-title>

    <v-card-text>
      <div><strong>Pet Care Experience:</strong> {{ props.application.petCareExperience }}</div>
      <div><strong>Pet Preferences:</strong> {{ props.application.petPreferences }}</div>
      <div><strong>Financial Info:</strong> {{ props.application.financialInfo }}</div>
      <div><strong>Life Style:</strong> {{ props.application.lifeStyle }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="success" @click="accept">Accept</v-btn>
      <v-btn color="error" @click="reject">Reject</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.status {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: bold;
  color: white;
}
.status.accepted {
  background-color: green;
}
.status.rejected {
  background-color: red;
}
</style>