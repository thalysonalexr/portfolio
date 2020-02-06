import Vue from 'vue'
import VueWait from 'vue-wait'
import App from './App'
import router from './router'
import { store } from '@/store/vuex'
import Style from '@/assets/css/all.css'
import FontAwesome from '@fortawesome/fontawesome-free/css/all.min.css'

import 'materialize-css'
import 'material-icons/iconfont/material-icons.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false
Vue.use(Style)
Vue.use(FontAwesome)
Vue.use(VueWait)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  wait: new VueWait({
    useVuex: true
  }),
  components: { App },
  template: '<App/>'
})
