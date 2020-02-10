import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import ymapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: 'AOP9QF4BAAAAT3KxdgIAaLhCDdYHHDTh-ogF9XGV1bXTh98AAAAAAAAAAACP51g_ip8HUpyV1hfb_n4aI6aChA==',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.config.productionTip = false
Vue.use(ymapPlugin, settings)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
