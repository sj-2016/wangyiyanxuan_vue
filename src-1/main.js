import Vue from 'vue'

import App from './App.vue'
import router from './router'

import FooterNav from './components/FooterNav/FooterNav.vue'

Vue.config.productionTip = false

Vue.component('FooterNav', FooterNav)

new Vue ({
  el: '#app',
  render: h => h(App),
  router
})


