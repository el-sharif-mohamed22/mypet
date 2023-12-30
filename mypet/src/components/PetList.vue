<script setup>
import PetCard from '@/components/PetCard.vue'
import { getPets } from '@/services/petService'

const pets = []
pets.value = await getPets()
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="(pet, i) in pets.value.data" :key="i" cols="auto">
        <PetCard :pet="pet" />
      </v-col>
    </v-row>
  </v-container>
</template>
