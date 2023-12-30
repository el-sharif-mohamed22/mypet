<script setup>
import PetForm from '@/components/PetForm.vue'
import ApplicationList from '@/components/ApplicationList.vue'
import BaseAppBar from '@/components/BaseAppBar.vue'
</script>


<template>
  <v-layout>
    <BaseAppBar title="Staff Home" />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-4 mb-4" elevation="2">
              <h2>Applications</h2>
              <ApplicationList />
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-4" elevation="2">
              <h2>Add Pet Form</h2>
              <PetForm />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.v-card {
  margin-bottom: 2rem;
  padding: 2rem;
}

/* Additional styles for buttons, form fields, etc., can be added here */
</style>