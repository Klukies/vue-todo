<template>
  <form @submit.prevent="$emit('add-to-list', toDoItem)">
    <input type="text" placeholder="What do you have to do?" v-model="toDoItem.title" />
  </form>
</template>

<script lang="ts">
import { ref, Ref } from 'vue';
import { TodoItem } from '../composables/useTodo';

export default {
  emits: ['add-to-list'],
  setup() {
    const toDoItem: Ref<TodoItem> = ref({ title: '', isCompleted: false });

    return { toDoItem };
  },
};
</script>

<style scoped>
form {
  @apply pb-6;
}

input[type='text'] {
  @apply w-full block text-lg border-2 border-solid border-gray-400 rounded px-4 py-2;
}

input::placeholder {
  @apply text-gray-700;
}
</style>