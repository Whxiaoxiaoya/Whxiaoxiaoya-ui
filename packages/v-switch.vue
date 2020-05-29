<template>
  <div class="v-switch" :class="{'is-checked':value}" @click="handleClick">
    <span class="v-switch__core" ref="core">
      <span class="v-switch__button"></span>
    </span>
    <!-- switch开关也是属于表单元素的,因此需要name属性,利用一个隐藏的input标签来实现 -->
    <input class="v-switch__input" type="checkbox" :name="name" ref="input">
  </div>
</template>

<script>
export default {
  name: "vSwitch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeOpenColor: {
      type: String,
      default: ""
    },
    activeCloseColor: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
      this.$nextTick(() => {
        //   数据更新完成后更新dom
        this.switchColor();
        this.$refs.input.checked = this.value;
      });
    },
    switchColor() {
      if (this.activeOpenColor || this.activeCloseColor) {
        let color = this.value ? this.activeOpenColor : this.activeCloseColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  },
  mounted() {
    this.switchColor();
    this.$refs.input.checked = this.value;
  }
};
</script>

<style lang="scss" scoped>
.v-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .v-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .v-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .v-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.v-switch.is-checked {
  .v-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .v-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
