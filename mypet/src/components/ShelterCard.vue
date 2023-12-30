<script setup>
const props = defineProps({
  shelter: Object
})
</script>
<template>
  <v-card class="mx-auto" max-width="344" variant="elevated">
    <v-card-item>
      <template v-slot:title> Shelter{{ props.shelter.shelterId }} </template>

      <v-card-text>
        Name: {{ props.shelter.name }} Location: {{ props.shelter.location }} Contact:
        {{ props.shelter.contact }}
      </v-card-text>
    </v-card-item>
  </v-card>
</template>
