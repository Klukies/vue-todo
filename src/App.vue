<template>
  <img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
  <Todo @addToList="addToList" :todoList="todoList" />
</template>

<script lang="ts" setup>
import Todo from './components/Todo.vue';
import { ref } from 'vue';
import { useTodo } from './composables/useTodo';

export default {
  name: 'App',
  components: { Todo },
};

export const { todoList, addToList } = useTodo();
</script>
