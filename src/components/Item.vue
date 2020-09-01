<template>
  <div class="item">
    <div class="todo-item-left" @click="$emit('toggle-completed')">
      <input type="checkbox" :checked="todoItem.isCompleted" />
      <label :class="{'is-complete': todoItem.isCompleted}">{{todoItem.title}}</label>
    </div>
    <button class="remove-item" @click="$emit('remove-from-list')">&times;</button>
  </div>
</template>

<script lang="ts">
import { TodoItem } from '../composables/useTodo';
export default {
  props: {
    todoItem: Object as () => TodoItem,
  },
  emits: ['toggle-completed', 'remove-from-list'],
};
</script>

<style scoped>
.item {
  @apply flex justify-between items-baseline px-1 pb-3;
}

.todo-item-left {
  @apply flex items-center;
}

input,
label {
  @apply cursor-pointer;
}

label {
  @apply text-3xl p-3 pl-6 text-gray-800;
}

label::selection {
  @apply bg-none;
}

.is-complete {
  @apply text-gray-700 line-through;
}

.remove-item {
  @apply inline-block text-2xl;
}
</style>