
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/css/reset.css'
import store from '../src/store'
import '../src/mock/mockServer'
import './filters'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/banana8.jpg'
Vue.use(VueLazyload, {
  loading
});
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
});
