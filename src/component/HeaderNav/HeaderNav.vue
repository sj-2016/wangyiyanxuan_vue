<template>
  <div class="wrapper nav">
    <ul>
      <li  @click="toNavCon(index)" v-for="(header,index) in headerList" :key="index">
        <span :class="{textColor: activeIndex===index}">{{header.name}}</span>
        <span :class="{line: activeIndex===index}"></span>
      </li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import PubSub from 'pubsub-js'
  import {mapState} from 'vuex'
  export default {
    data () {
      return{
        activeIndex: 0
      }
    },
    computed:{
      ...mapState(['headerList']),
    },
    mounted () {
//        轮播
      new BScroll('.wrapper',{
        scrollX: true,
        click:true
      });

      PubSub.subscribe('activeIndex',(msg,activeIndex)=>{
        console.log(activeIndex);
        this.activeIndex = activeIndex
      });
      this.$store.dispatch('getHeaderNav')

    },
    beforeDestroy(){
//       取消订阅  防止切换路由  导致重复订阅
      PubSub.unsubscribe('activeIndex')
    },
    updated(){
      const index =this.activeIndex;
      localStorage.setItem("setActiveId",index)
    },
    beforeMount(){
      const nowIndex = localStorage.getItem("setActiveId")
      this.activeIndex=parseInt(nowIndex)

    },
    beforeDestroy(){
      localStorage.setItem("setActiveId",0)
    },
    methods: {
      toNavCon (index) {
//        console.log(index)
        if(index===0){
          this.$router.replace(`/homepage/homenavcontent/${index}`)

        }else{
          this.$router.replace(`/homepage/homenavpublic/${index}`)
        }
        this.activeIndex = index
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .nav
    overflow  hidden
    width 100%
    ul
      display flex
      padding 0 30/$rem
      width

      li
        color #333
        white-space  nowrap
        padding 0 (16/$rem)
        font-size (27.998/$rem)
        margin-left (48/$rem)
        width (55.954/$rem)
        height (60/$rem)
        line-height (60/$rem )
        position relative
        .line
          display block
          width (87.953/$rem)
          height 3.984/$rem;
          background  #b4282d
          position absolute
          bottom 0
          left 0
        .textColor
          color #b4282d
      li:first-child
        margin-left 0
</style>
<!--.wrapper-nav
    position fixed
    top 52px
    overflow hidden
    width 100%
    height 30px
    background #fff
    z-index 500
    ul
      display flex
      width 550px
      li
        color #333
        white-space normal
        width 55px
        height 25px
        text-align center
        .textChange
          display block
          color  #b4282d
          padding-bottom 7px
        .line
          width 55px
          height 1px
          display  block
          background  #b4282d
          bottom 0
          left 0-->
