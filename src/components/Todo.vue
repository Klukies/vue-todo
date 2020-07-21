<template>
  <Form @addToList="toDoItem => $emit('addToList', toDoItem)" />
  <List :todoList="todoList" />
</template>

<script lang="ts" setup="props">
import Form from './Form.vue';
import List from './List.vue';

declare const props: {
  todoList: string[];
};

export default {
  components: { Form, List },
  emits: ['addToList'],
};
</script>
