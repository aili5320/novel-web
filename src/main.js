import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
import '@/assets/css/bootstrap.css'
import '@/assets/css/common.css'
import '@/assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
