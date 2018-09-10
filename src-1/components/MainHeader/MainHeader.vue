<template>
  <div class="homeHeader">
    <span class="text">网易严选</span>
    <div class="icon">
      <span>搜索商品, 共10719款好物</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .homeHeader
    position fixed
    top 0
    left 0
    z-index 500
    width 100%
    height 50px
    display flex
    justify-content space-around
    padding 8px 0
    text-align center
    background #fff
    .text
      width 20%
      height: 30px
      line-height 30px
      letter-spacing 1px

    .icon
      width 70%
      height: 30px
      line-height 30px
      background #eee
      border-radius 5px
      background-image url('../../common/images/search2-2fb94833aa.png')
      background-repeat no-repeat
      background-size 15px
      background-position 30px


</style>