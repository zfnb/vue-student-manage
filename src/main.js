import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import toast from "./components/tools/toast/index"
Vue.prototype.$toast = toast
// window.alert = null
Vue.prototype.$isLogin = false
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
