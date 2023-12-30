<script setup>
import ShelterFrom from '@/components/ShelterForm.vue'
import ShelterList from '@/components/ShelterList.vue'
import BaseAppBar from '@/components/BaseAppBar.vue'
</script>
<template>
  <v-layout>
    <BaseAppBar title="Admin Home" />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <ShelterList />
          </v-col>
          <v-col cols="12" md="4">
            <ShelterFrom />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>
