<template>
  <div class="item">
    <div class="todo-item-left" @click="$emit('toggle-completed')">
      <input type="checkbox" :checked="todoItem.isCompleted" />
      <label :class="{ 'is-complete': todoItem.isCompleted }">{{ todoItem.title }}</label>
    </div>
    <button class="remove-item" @click="$emit('remove-from-list')">&times;</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ todoItem: TodoItem }>();
</script>

<style scoped src="../assets/css/item.css" />
