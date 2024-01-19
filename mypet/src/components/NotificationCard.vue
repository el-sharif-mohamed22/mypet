<script setup>
import { markNotificationRead } from '@/services/notificationService.js'
import { useUserStore } from '@/store/user'
const store = useUserStore()
const props = defineProps({
  notification: Object
})
const emits = defineEmits(['notification-read'])

const markAsRead = async () => {
  try {
    await markNotificationRead(store.userId, props.notification.notificationId)
    emits('notification-read')
  } catch (error) {
    console.error('Error marking notification as read:', error)
    // Handle the error appropriately, e.g., show an error message to the user
  }
}
</script>
<template>
  <v-card class="mx-auto" max-width="344" variant="elevated">
    <v-card-item>
      <template v-slot:title> Notification{{ props.notification.notificationId }} </template>

      <v-card-text> {{ props.notification.body }} </v-card-text>
    </v-card-item>

    <v-card-actions>
      <v-btn @click="markAsRead"> Mark As Read </v-btn>
    </v-card-actions>
  </v-card>
</template>
