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
  props: {
    remainingItems: Number,
    areAllItemsComplete: Boolean,
  },
};
</script>

<style scoped src="../assets/css/extra.css" />