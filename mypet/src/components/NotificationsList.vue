<script setup>
import NotificationCard from '@/components/NotificationCard.vue'
import { getNotifications } from '@/services/notificationService.js'
import { useUserStore } from '@/store/user'
import { ref } from 'vue'

const store = useUserStore()
const notifications = ref([])
notifications.value = await getNotifications(store.userId)

const refreshNotifications = async () => {
  notifications.value = await getNotifications(store.userId)
}
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="(notification, i) in notifications" :key="i" cols="auto">
        <NotificationCard :notification="notification" @notification-read="refreshNotifications" />
      </v-col>
    </v-row>
  </v-container>
</template>
