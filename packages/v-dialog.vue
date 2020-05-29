<template>
  <transition name="dialog-fade">
    <div class="v-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <!-- 事件修饰符:.self 只当在 event.target 是当前元素自身时触发处理函数 即事件不是从内部元素触发的 -->
      <div class="v-dialog" :style="{width,marginTop:mtop}">
        <div class="v-dialog__header">
          <!-- 插槽默认值 -->
          <slot name="title">
            <span class="v-dialog__title">{{title}}</span>
          </slot>
          <button class="v-dialog__headerbtn" @click="handleClose">
            <i class="hm-icon-close"></i>
          </button>
        </div>
        <div class="v-dialog__body">
          <slot>内容</slot>
        </div>
        <!--$slots,是当前组件所有使用的插槽的集合  -->
        <div class="v-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "vDialog",
  props: {
    title: {
      type: String,
      default: "title"
    },
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "50%"
    },
    mtop: {
      type: String,
      default: "15vh"
    }
  },
  methods: {
    handleClose() {
      // 利用.sync  "update:属性名" 来解决子组件不能改父组件属性的问题
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .v-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .v-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .v-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      //scoped使外部传入的组件样式无法生效(因为给每个类名都添加了随机属性选择器):
      //可使用深度选择器css中:>>> scss中::v-deep less中:/deep/
      ::v-deep .v-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
// 对话框展示动画:
.dialog-fade-enter-active {
  animation: fade 0.5s;
}
.dialog-fade-leave-active {
  animation: fade 0.5s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
