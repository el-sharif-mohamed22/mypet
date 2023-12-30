<script setup>
import NotificationLists from '@/components/NotificationsList.vue'
import PetList from '@/components/PetList.vue'
import BaseAppBar from '@/components/BaseAppBar.vue'
</script>
<template>
  <v-layout>
    <BaseAppBar title="User Home" />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-4" elevation="2">
              <h2>Notifications</h2>
              <NotificationLists />
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-4" elevation="2">
              <h2>Available Pets</h2>
              <PetList />
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
}
</style>
