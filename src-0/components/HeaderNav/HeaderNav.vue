<template>
  <div class="hdScorllX" >
    <div class="hdScorllItem" ref="hdScorllItem">
      <span :class="{active:index === activeIndex }" v-for="(item,index) in data" :key="index" ref="hdScorll" @click="active(index)">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        isSelected: false,
        activeIndex: 0,
      }
    },
    mounted() {
      if (!this.data.length) {
        Indicator.open({
          spinnerType: 'fading-circle'
        });
      }
      this.$store.dispatch('getData', () => {
        this.$nextTick(() => { // 列表数据更新显示后执行
          this._initScroll()
        })
      });
      this.$store.dispatch('getData');
    },
    computed: {
      ...mapState(['data'])
    },
    mounted() {
      new BScroll('.wrapper-nav', {
        scrollX: true,
        click: true
      });

    },
    methods: {
      active(indexActive) {
        this.activeIndex = indexActive
      },
      // 初始化滚动
      _initScroll() {
        new BScroll('.hdScorllX', {
          click: true,
          scrollX: true
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .hdScorllX
    position fixed
    width 100%
    overflow hidden
    background #ffffff
    display flex
    padding 0 0 12px 0
    .hdScorllItem
      padding 0 0 12px 0
      display flex
      justify-content space-between
      align-items center
      span
        width 70px
        text-align center
        flex-shrink 0
        flex-wrap nowrap
        margin 0 .5*75/$rem
        font-size .37333*75/$rem
        &.active
          padding 0 0 12px 0
          border-bottom 3px solid #b4282d
          color #b4282d
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
