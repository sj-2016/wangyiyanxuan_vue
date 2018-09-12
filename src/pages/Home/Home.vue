<template>
  <div class="homePageCon">
    <div class="head">
      <HomeHeader/>
      <Nav/>
    </div>
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  import Nav from '../../components/Nav/Nav.vue'

  export default {
    components: {
      HomeHeader,
      Nav,
      FooterGuide
    },
    mounted () {

    }
  }
</script>

<style scoped lang="less">
  .homePageCon{
    height:100%;
    overflow: hidden;
    .head{
      position: absolute;
      top: 0;
      left:0;
      z-index: 1;
      background: #fff;
    }
  }

</style>
