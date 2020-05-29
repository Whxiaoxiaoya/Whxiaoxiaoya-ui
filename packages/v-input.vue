<template>
  <div class="v-input" :class="{'v-input--suffix':suffixShow}">
    <!-- 使用组件时的v-model属性的传值相当于给input添加的value和@input事件 -->
    <input
      class="v-input__inner"
      :class="{'is-disabled':disabled}"
      :placeholder="placeholder"
      :type="showPassword?(passwordShow?'text':type):type"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      :clearable="clearable"
      @blur="blurFn"
      @change="changeFn"
      @focus="focusFn"
    >
    <span class="v-input__suffix" v-if="suffixShow">
      <i class="hm-input__icon hm-icon-circle-close" v-if="clearable&&value" @click="clear"></i>
      <i class="hm-input__icon hm-icon-view" v-if="showPassword" @click="handlePassword"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "vInput",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number],
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      passwordShow: false
    };
  },
  computed: {
    suffixShow() {
      return this.clearable || this.showPassword;
    }
  },
  methods: {
    handleInput(e) {
      //实现input的双向绑定:
      this.$emit("input", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    handlePassword() {
      // 密码框密文显示的切换
      this.passwordShow = !this.passwordShow;
    },
    blurFn(e) {
      this.$emit("blur", e);
    },
    changeFn(e) {
      this.$emit("change", e);
    },
    focusFn(e) {
      this.$emit("focus", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-input {
  width: 200px;
  //   width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .v-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.v-input--suffix {
  .v-input__inner {
    padding-right: 30px;
  }
  .v-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
