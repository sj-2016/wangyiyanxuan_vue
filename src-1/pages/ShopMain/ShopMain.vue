<template>
  <div>
        <MainHeader/>
        <NavBar/>
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
        <div class="content1">
          <header>品牌制造商直供<i class="iconfont icon-icon--"></i></header>
          <div>
            <p>CK制造商</p>
            <p>25元起</p>
            <img src="../../common/images/list/1.png" alt="">
          </div>
          <div>
            <p>CK制造商</p>
            <p>25元起</p>
            <img src="../../common/images/list/1.png" alt="">
          </div>
          <div>
            <p>CK制造商</p>
            <p>25元起</p>
            <img src="../../common/images/list/1.png" alt="">
          </div>
          <div>
            <p>CK制造商</p>
            <p>25元起</p>
            <img src="../../common/images/list/1.png" alt="">
          </div>
        </div>
        <div class="newThings">
          <div>新品首发</div>
          <div><span>查看全部&gt;</span></div>
          <div>
            <ul>
              <li>
                <img src="../../common/images/list/2.png" alt="">
                <span>网易有道翻译王 2.0pro</span>
                <span>随身离线翻译神器 预售送100元礼品卡</span>
                <span>¥1688</span>
              </li>

            </ul>
          </div>
        </div>
      </div>

    <FooterNav/>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import MainHeader from '../../components/MainHeader/MainHeader.vue'
  import NavBar from '../../components/NavBar/NavBar.vue'
  export default {
    data() {
      return {}
    },
    mounted(){
      let mySwiper = new Swiper('.swiper-container', {
              pagination: {
                el: '.swiper-pagination',
              },
              loop: true,
              autoplay: {
                delay: 2000,//1秒切换一次
              },
            })
    },
    components:{
      MainHeader,
      NavBar

    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .main
    padding 80px 0 50px 0
  .content1
    width 100%
    height 40%
    background #fff
    margin 10px 0
    header
      width 100%
      height 30%
      text-align center
      font-size 20px
      padding 3% 0
    div
      display inline-block
      width 45%
      height 35%
      background #eee
      margin 0 0 10px 10px
      p
        padding 10px 0 0 10px
      img
        width 100%
        height 50%
  .swiper-container
    width 100%
    height 30%
  .swiper-slide img
      width 100%
      height 30%

  .prompts
    display flex
    justify-content space-around
    background #fff
    .prompt
      padding 10px 0

</style>