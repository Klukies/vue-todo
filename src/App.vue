<template>
  <img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
  <Todo />
</template>

<script lang="ts">
import Todo from './components/Todo.vue';

export default {
  name: 'App',
  components: { Todo },
};
</script>
