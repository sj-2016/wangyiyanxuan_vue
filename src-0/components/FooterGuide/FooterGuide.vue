<template>
  <footer class="footer_guide border-1px">
     <span class="guide_item" :class="{on: '/home'===$route.path}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on: '/things'===$route.path}" @click="goTo('/things')">
      <span class="item_icon">
        <i class="iconfont icon-saoyisao"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" :class="{on: '/types'===$route.path}" @click="goTo('/types')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on: '/cart'===$route.path}" @click="goTo('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-cart"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on: '/person'===$route.path}" @click="goTo('/person')">
      <span class="item_icon">
        <i class="iconfont icon-person2"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>
<script>
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>

