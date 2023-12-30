<script setup>
import ShelterCard from '@/components/ShelterCard.vue'
import { getShelters } from '@/services/shelterService'

const shelters = []
shelters.value = await getShelters()
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="(shelter, i) in shelters.value.data" :key="i" cols="auto">
        <ShelterCard :shelter="shelter" />
      </v-col>
    </v-row>
  </v-container>
</template>
