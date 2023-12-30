<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="(application, i) in applications" :key="i" cols="auto">
        <ApplicationCard :application="application" @update-list="refreshList" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ApplicationCard from '@/components/ApplicationCard.vue'
import { ref } from 'vue'
import { getStaffApplications } from '@/services/applicationService.js'
import { useUserStore } from '@/store/user'
import { reactive } from 'vue'

const store = useUserStore()
const applications = ref([])

const refreshList = async () => {
  applications.value = await getStaffApplications(store.userId)
}

refreshList()
</script>
