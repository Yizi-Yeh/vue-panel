import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

Vue.use(ElementUI)
Vue.component('ImgInputer', ImgInputer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
