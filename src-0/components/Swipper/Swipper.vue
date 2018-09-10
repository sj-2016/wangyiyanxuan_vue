<template>
    <div class="main">
      <div class="swiper-container swiper-container-horizonta">
        <ul class="swiper-wrapper">
          <li  class="swiper-slide"><img src="../../common/images/swipe/1.jpg" alt=""></li>
          <li  class="swiper-slide"><img src="../../common/images/swipe/2.jpg" alt=""></li>
          <li  class="swiper-slide"><img src="../../common/images/swipe/3.jpg" alt=""></li>
          <li  class="swiper-slide"><img src="../../common/images/swipe/4.jpg" alt=""></li>
          <li  class="swiper-slide"><img src="../../common/images/swipe/5.jpg" alt=""></li>
          <li  class="swiper-slide"><img src="../../common/images/swipe/6.jpg" alt=""></li>
          <li  class="swiper-slide"><img src="../../common/images/swipe/7.jpg" alt=""></li>
          <li  class="swiper-slide"><img src="../../common/images/swipe/8.jpg" alt=""></li>
        </ul>
        <div class="swiper-pagination"></div>
      </div>
      <div class="prompts">
        <div class="prompt"><i class="iconfont icon-right-1"></i>网易自营品牌</div>
        <div class="prompt"><i class="iconfont icon-right-1"></i>30天无忧退货</div>
        <div class="prompt"><i class="iconfont icon-right-1"></i>48小时快速退货</div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  export default {
    mounted() {
      this.$store.dispatch('getBanner');
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,  // 循环轮播
        autoplay: {
          autoplay:true,
          delay: 3000
        },
      })
    },
    computed: {
      ...mapState(['banner']),
    },
    methods:{
      active(indexActive){
        this.activeIndex = indexActive
      },
    },
    watch: {
      banner(val) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            effect: "fade",
            loop: true,
            autoplay: {
              autoplay:true,
              delay: 3000
            },
          })
          if(this.banner.length || this.banner.length){
            Indicator.close();
          }
        })
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.main
  width 100%
  padding 78px 0 0 0
  .swiper-container
    width 100%
    height 200px
    img
      width 100%
      height 100%
  .prompts
    display flex
    justify-content space-around
    background #fff
    .prompt
      color #333
      font-size 13px
      padding 10px 0
      .iconfont
        color red
</style>
