<script setup>
import { markNotificationRead } from '@/services/notificationService.js'
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
const store = useUserStore()
const props = defineProps({
  notification: Object
})
const isComponentVisible = ref(true)
const markAsRead = async () => {
  await markNotificationRead(store.userId, props.notification.notificationId)
  isComponentVisible.value = false
}
</script>
<template>
  <v-card v-if="isComponentVisible" class="mx-auto" max-width="344" variant="elevated">
    <v-card-item>
      <template v-slot:title> Notification{{ props.notification.notificationId }} </template>

      <v-card-text> {{ props.notification.body }} </v-card-text>
    </v-card-item>

    <v-card-actions>
      <v-btn @click="markAsRead"> Mark As Read </v-btn>
    </v-card-actions>
  </v-card>
</template>
