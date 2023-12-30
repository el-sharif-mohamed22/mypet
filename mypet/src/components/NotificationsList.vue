<script setup>
import NotificationCard from '@/components/NotificationCard.vue'
import { getNotifications } from '@/services/notificationService.js'
import { useUserStore } from '@/store/user'
const store = useUserStore()
const notifications = []
notifications.value = await getNotifications(store.userId)
</script>
<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="(notification, i) in notifications.value.data" :key="i" cols="auto">
        <NotificationCard :notification="notification" />
      </v-col>
    </v-row>
  </v-container>
</template>
