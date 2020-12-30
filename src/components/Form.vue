<template>
  <form @submit.prevent="$emit('add-to-list', todoItem)">
    <input type="text" placeholder="What do you have to do?" v-model="todoItem.title" />
  </form>
</template>

<script setup lang="ts">
import { defineEmit, ref } from 'vue';

const todoItem = ref<TodoItem>({ title: '', isCompleted: false });
defineEmit({ 'add-to-list': (todoItem: TodoItem) => true });
</script>

<style scoped src="../assets/css/form.css" />
