<template>
  <div id="home-wrap">
    <div class="home">
      <HomeHeader/>
      <HeaderNav/>
      <Swipper/>
      <MainContainer/>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
  import HeaderNav from '../../components/HeaderNav/HeaderNav.vue'
  import Swipper from '../../components/Swipper/Swipper.vue'
  import MainContainer from '../../components/MainContainer/MainContainer.vue'

  export default {
    components:{
      HomeHeader,
      HeaderNav,
      Swipper,
      MainContainer
    },
    mounted () {

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home-wrap
    height 100%
    overflow hidden
    background #e4e4e4
    .home
      background #e4e4e4
      position absolute
      top 0
      left 0
      z-index 1
</style>
