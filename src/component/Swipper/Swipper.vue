<template>
  <div class="swiper-container" v-if="banner.length>0">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
        <img v-lazy="item.picUrl" />
      </div>
    </div>
  </div>
</template>


<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  export default {
    data(){
      return {}
    },
    mounted() {
      this.$store.dispatch('getBanner');
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
