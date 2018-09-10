import Vue from 'vue'
import Router from 'vue-router'

import HeaderPage from '../pages/HeaderPage/HeaderPage.vue'
import ShopMain from '../pages/ShopMain/ShopMain.vue'
import ShopLooks from '../pages/ShopLooks/ShopLooks.vue'
import ShopLists from '../pages/ShopLists/ShopLists.vue'
import ShopChart from '../pages/ShopChart/ShopChart.vue'
import PersonCenter from '../pages/PersonCenter/PersonCenter.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/headerPage',
      component: HeaderPage,
      meta:{
        isShow:true
      }
    },
    {
      path: '/shopMain',
      component: ShopMain,
      meta:{
        isShow:true
      }
    },
    {
      path:'/shopLooks',
      component: ShopLooks,
      meta:{
        isShow:true
      }
    },
    {
      path: '/shopLists',
      component: ShopLists, meta:{
      isShow:true
    }
    },
    {
      path: '/shopChart',
      component: ShopChart,
      meta:{
        isShow:true
      }
    },
    {
      path: '/personCenter',
      component: PersonCenter,
      meta:{
        isShow:true
      }
    },
    {
      path:'/',
      redirect:'/HeaderPage'
    }

  ]
})
