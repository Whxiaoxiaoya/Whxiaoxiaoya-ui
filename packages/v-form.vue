<template>
  <div class="v-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vForm",
  props: {
    model: {
      type: Object
    },
    labelWidth: {
      type: String,
      default: ""
    }
  },
  provide() {
    return {
      vForm: this
    };
  }
};
</script>

<style>
</style>
