import { ref, Ref } from 'vue';

const todoList: Ref<string[]> = ref([]);

const addToList = (todoItem: string) => {
  todoList.value.push(todoItem);
};

export const useTodo = () => {
  return { todoList, addToList };
};
