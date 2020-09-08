import { ref, Ref, computed } from 'vue';

export interface TodoItem {
  title: string;
  isCompleted: boolean;
}

const todoList: Ref<TodoItem[]> = ref([
  { title: "Finish demo's", isCompleted: false },
  { title: 'Finish presentation', isCompleted: false },
]);
const remainingItems = computed(() => todoList.value.length);
const areAllItemsComplete = computed(() =>
  todoList.value.reduce((areAllItemsCompleted, item) => {
    return areAllItemsCompleted && item.isCompleted;
  }, true),
);

export const useTodo = () => {
  const addToList = (todoItem: TodoItem) => {
    todoList.value.push(todoItem);
  };

  const toggleCompleted = (index: number) => {
    todoList.value[index].isCompleted = !todoList.value[index].isCompleted;
  };

  const removeFromList = (index: number) => {
    todoList.value.splice(index, 1);
  };

  const setAllItems = (isCompleted: boolean) => {
    return todoList.value.forEach((item) => (item.isCompleted = isCompleted));
  };

  const toggleAllItems = () => {
    if (areAllItemsComplete.value) {
      return setAllItems(false);
    }

    return setAllItems(true);
  };

  return {
    todoList,
    remainingItems,
    areAllItemsComplete,
    addToList,
    toggleCompleted,
    removeFromList,
    toggleAllItems,
  };
};
