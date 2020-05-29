<template>
  <label class="v-radio" :class="{'is-checked':label===model}">
    <span class="v-radio__input">
      <span class="v-radio__inner"></span>
      <input class="v-radio__original" type="radio" :value="label" v-model="model">
    </span>
    <span class="v-radio__label">
      <slot>
        <template>{{label}}</template>
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "vRadio",
  inject: {
    radioGroup: {
      default: ""
    }
  },
  props: {
    label: [String, Number, Boolean],
    value: null,
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.radioGroup.value : this.value;
      },
      set(value) {
        //  触发上级v-model
        this.isGroup
          ? this.radioGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    isGroup() {
      return !!this.radioGroup;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .v-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .v-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .v-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .v-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.v-radio.is-checked {
  .v-radio__input {
    .v-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .v-radio__label {
    color: #409eff;
  }
}
</style>
