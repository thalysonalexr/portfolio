import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from '@/store/vuex'
import Style from '@/assets/css/all.css'
import 'materialize-css'
import 'material-icons/iconfont/material-icons.css'
import 'materialize-css/dist/css/materialize.css'

Vue.config.productionTip = false
Vue.use(Style)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
