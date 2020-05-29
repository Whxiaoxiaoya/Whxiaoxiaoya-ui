// 统一导出
// 导入颜色选择器组件
import Button from './v-button'
import Dialog from './v-dialog'
import Input from './v-input'
import Checkbox from './v-checkbox'
import Radio from './v-radio'
import RadioGroup from './v-radio-group'
import Switch from './v-switch'
import CheckboxGroup from './v-checkbox-group'
import Form from './v-form'
import FormItem from './v-form-item'
import './fonts/font.scss'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
  install
}
