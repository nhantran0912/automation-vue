import Vue from 'vue'
import App from './App'
import router from './router'
import 'es6-promise/auto'

import './services/notification'
import './services/user'
import './services/axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
