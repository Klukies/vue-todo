<template>
  <div v-for="(todoItem, index) in todoList" :key="index" class="todo-item">
    <input type="checkbox" />
    {{todoItem}}
    <button class="remove-item">&times;</button>
  </div>
</template>

<script lang="ts" setup="props">
import { defineComponent } from 'vue';

declare const props: {
  todoList: string[];
};
</script>
