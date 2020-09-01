<template>
  <div class="extra">
    <div class="form-group">
      <input
        type="checkbox"
        id="check-all"
        :checked="areAllItemsComplete"
        @change="$emit('toggle-all-items')"
      />
      <label for="check-all">{{areAllItemsComplete ? 'Uncheck All' : 'Check All'}}</label>
    </div>
    <span>{{remainingItems}} items left</span>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['toggle-all-items'],
  props: {
    remainingItems: Number,
    areAllItemsComplete: Boolean,
  },
};
</script>

<style scoped>
.extra {
  @apply flex justify-between pt-3 px-1 border-t-2 border-gray-200 border-solid;
}

input,
label {
  @apply cursor-pointer;
}

label {
  @apply p-3 text-gray-800;
}

label::selection {
  @apply bg-none;
}
</style>