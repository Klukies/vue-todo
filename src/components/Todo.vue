<template>
  <Form @add-to-list="(toDoItem) => addToList(toDoItem)" />
  <List
    :todoList="todoList"
    @toggle-completed="(index) => toggleCompleted(index)"
    @remove-from-list="(index) => removeFromList(index)"
  />
  <Extra
    v-if="todoList.length"
    :remaining-items="remainingItems"
    :are-all-items-complete="areAllItemsComplete"
    @toggle-all-items="toggleAllItems"
  />
</template>

<script lang="ts">
import Form from './Form.vue';
import List from './List.vue';
import Extra from './Extra.vue';
import { useTodo } from '../composables/useTodo';

export default {
  components: { Form, List, Extra },
  setup() {
    const {
      todoList,
      remainingItems,
      areAllItemsComplete,
      addToList,
      toggleCompleted,
      removeFromList,
      toggleAllItems,
    } = useTodo();

    return {
      todoList,
      remainingItems,
      areAllItemsComplete,
      addToList,
      toggleCompleted,
      removeFromList,
      toggleAllItems,
    };
  },
};
</script>
