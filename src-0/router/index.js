import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Cart from '../pages/Cart/Cart.vue'
import Person from '../pages/Person/Person.vue'
import Things from '../pages/Things/Things.vue'
import Types from '../pages/Types/Types.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/person',
      component: Person,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/things',
      component: Things,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/types',
      component: Types,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
