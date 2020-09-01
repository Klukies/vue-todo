<template>
  <div class="todo-list">
    <Item
      v-for="(todoItem, index) in todoList"
      :key="index"
      :todoItem="todoItem"
      @toggle-completed="$emit('toggle-completed', index)"
      @remove-from-list="$emit('remove-from-list', index)"
    />
  </div>
</template>

<script lang="ts">
import Item from './Item.vue';
import { TodoItem } from '../composables/useTodo';

export default {
  components: { Item },
  props: {
    todoList: Object as () => TodoItem[],
  },
  emits: ['toggle-completed', 'remove-from-list'],
};
</script>
