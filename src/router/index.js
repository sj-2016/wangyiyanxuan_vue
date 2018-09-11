import Vue from 'vue'
import VueRouter from 'vue-router'

import FirstShow from '../pages/FirstShow/FirstShow.vue'
import Home from '../pages/Home/Home.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'
import KnowThings from '../pages/KnowThings/KnowThings.vue'
import Category from '../pages/Category/Category.vue'

import HomeNavContent from '../pages/Home/HomeNavContent/HomeNavContent.vue'
import HomeNavPublic from '../pages/Home/HomeNavPublic/HomeNavPublic.vue'


Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/firstshow',
      component: FirstShow
    },
    {
      path: '/home',
      component: Home,
      meta:{
        showFooter:true
      },
      children: [
        {
          path: '/homepage/homenavcontent/:id',
          component: HomeNavContent,
          meta:{
            isShow:true
          }
        },
        {
          path: '/homepage/homenavpublic/:id',
          component: HomeNavPublic,
          meta:{
            isShow:true
          }
        },
        {
          path: '',
          redirect: '/homepage/homenavcontent/1'

        }
      ]
    },
    {
      path: '/cart',
      component: Cart,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/knowthings',
      component: KnowThings,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/category',
      component: Category,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/',
      redirect: '/firstshow'
    }
  ]
})
