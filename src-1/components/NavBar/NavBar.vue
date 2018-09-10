<template>
  <div class="navBar">
    <ul>
      <li class="active">推荐</li>
      <li>家居</li>
      <li>鞋包</li>
      <li>服饰</li>
      <li>电器</li>
      <li>洗护</li>
      <li>饮食</li>
      <li>餐厨</li>
      <li>婴童</li>
      <li>文体</li>
      <li>特色区</li>
    </ul>
  </div>

</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },
    mounted() {
      new BScroll('.navBar', {
        scrollX: true,
        click: true
      })
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .navBar
    position fixed
    top 50px
    left 0
    overflow hidden;
    width 100%
    background #fff
    z-index 500
    ul
      display  flex;
      width 200%
      padding 0 10px
      li
        color #333
        white-space nowrap
        font-size 16px
        width 45%;
        margin 0 3%
        height 30px
        line-height 30px;
        text-align left
        position relative;
        font-size 14px
        &.active
          color red
          border-bottom 1px solid red


</style>