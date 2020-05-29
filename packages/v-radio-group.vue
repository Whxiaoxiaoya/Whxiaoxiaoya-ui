<template>
  <div class="v-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vRadioGroup",
  provide() {
    return {
      radioGroup: this
    };
  },
  props: {
    value: null
  }
};
</script>

<style>
</style>
