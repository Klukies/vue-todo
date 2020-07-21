<template>
  <form @submit.prevent="$emit('addToList', toDoItem)">
    <input type="text" placeholder="What do you have to do?" v-model="toDoItem" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

export const toDoItem = ref('');
</script>