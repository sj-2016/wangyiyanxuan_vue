<template>
  <div class="homeHeader">
   <a class="logo"></a>
   <div class="icon">
     <span>搜索商品, 共10719款好物</span>
   </div>
</div>
</template>
<script>
  export default {

    data(){
      return{}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .homeHeader
    position fixed
    width 100%
    heigh 20px
    display flex
    padding 13px 16px
    background #fff
    z-index 500
    .logo
      width 60px
      height 23px
      margin-right 10px
      display inline-block
      background-size 60px 20px
      background-repeat no-repeat
      background-image url("../../common/images/logo.png")
    .icon
      width 270px
      height 27px
      color #333
      background #ededed
      font-size 13px
      line-height 25px
      text-align center
      border-radius 3px
      background-size 20px
      background-position-y 2px
      background-position-x 30px
      background-image  url("../../common/images/search2-2fb94833aa.png")
      background-repeat no-repeat

</style>
