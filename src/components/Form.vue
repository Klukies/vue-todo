<template>
  <form @submit.prevent="$emit('add-to-list', toDoItem)">
    <input type="text" placeholder="What do you have to do?" v-model="toDoItem.title" />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const toDoItem = ref<TodoItem>({ title: '', isCompleted: false });
</script>

<style scoped src="../assets/css/form.css" />