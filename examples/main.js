import Vue from 'vue'
import App from './App.vue'
import wxUi from '../packages'
Vue.config.productionTip = false
Vue.use( wxUi )
new Vue({
  render: h => h(App)
}).$mount('#app')
