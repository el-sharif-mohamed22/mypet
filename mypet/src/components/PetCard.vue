<script setup>
import { defineProps } from 'vue'
import { useUserStore } from '@/store/user'
import ApplicationForm from '@/components/ApplicationForm.vue'
const store = useUserStore()
const props = defineProps({
  pet: Object
})
</script>

<template>
  <v-card class="mx-auto" max-width="344" variant="elevated">
    <v-card-item>
      <template v-slot:title> Pet{{ props.pet.petId }} </template>

      <v-card-text>
        Name: {{ props.pet.name }}<br />
        Species: {{ props.pet.species }}<br />
        Breed: {{ props.pet.breed }}<br />
        Age: {{ props.pet.age }}<br />
        Gender: {{ props.pet.gender }}<br />
        Health Status: {{ props.pet.healthStatus }}<br />
        Behaviour: {{ props.pet.behaviour }}
      </v-card-text>
      <ApplicationForm v-if="store.userType == 'User'" :pet="props.pet" />
    </v-card-item>
  </v-card>
</template>
