<template>
  <form @submit.prevent="$emit('add-to-list', toDoItem)">
    <input type="text" placeholder="What do you have to do?" v-model="toDoItem.title" />
  </form>
</template>

<script lang="ts">
import { ref, Ref } from 'vue';
import { TodoItem } from '../composables/useTodo';

export default {
  setup() {
    const toDoItem: Ref<TodoItem> = ref({ title: '', isCompleted: false });

    return { toDoItem };
  },
};
</script>

<style scoped src="../assets/css/form.css" />