
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Button} from 'mint-ui'
import './mock/mockServer'
import VueLazyLoader from 'vue-lazyloader'

import loading from './common/images/banana8.jpg'
Vue.use(VueLazyLoader,{
  loading
});
/* eslint-disable no-new */
Vue.component(Button.name, Button);
new Vue({
  el: '#app',
  router,
  render:h=>h(App),
  store,
});
