<template>
  <div class="hm-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vCheckboxGroup",
  props: {
    value: {
      type: Array
    }
  },
  provide() {
    return {
      checkboxGroup: this
    };
  }
};
</script>

<style>
</style>
