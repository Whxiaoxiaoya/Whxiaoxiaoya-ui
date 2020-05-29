<template>
  <div id="app">
    <v-switch v-model="openShow"></v-switch>
    <v-input v-model="inputValue" placeholder="请输入lll" clearable></v-input>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      openShow: false,
      inputValue: "lll"
    };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
