import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入 element-ui
import ElementUI from 'element-ui'
// 默认样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入 vue-bus
import VueBus from 'vue-bus'
Vue.use(VueBus)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
