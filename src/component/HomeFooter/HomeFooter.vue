<template>
  <div>
    <div class="home-footer-wrap">
      <div class="m-ft">
        <div class="footer-downloader">
          <div class="toApp">下载APP</div>
          <div class="toWeb">电脑版</div>
        </div>
        <p class="app-detail">
          <span>网易公司版权所有 © 1997-</span>
          <span>2018</span>
          <br>
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeFooter"
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins';
  .home-footer-wrap{
    padding-bottom: 98/@rem;
    border-top: 1px solid rgba(0,0,0,.15);
    background-color: #414141;
  .m-ft{
    width: 10*75/@rem;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    padding: .72*75/@rem .26667*75/@rem .37333*75/@rem;
    .footer-downloader{
      .toApp{
        width: 2.29333*75/@rem;
        font-size: .32*75/@rem;
        color: #fff;
        margin-right: .66667*75/@rem;
        height: .82667*75/@rem;
        line-height: .82667*75/@rem;
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
        border: 1px solid #999;
      }
      .toWeb{
        border: 1px solid #999;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        border-radius: 4px;
        overflow: hidden;
        width: 2.29333*75/@rem;
        font-size: .32*75/@rem;
        color: #fff;
        margin-right: .66667*75/@rem;
        height: .82667*75/@rem;
        line-height: .82667*75/@rem;
      }
    }
    .app-detail{
      margin-top: .48*75/@rem;
      font-size: .32*75/@rem;
      line-height: .42667*75/@rem;
      color: #999;
      span{
        font-size: .32*75/@rem;
        line-height: .42667*75/@rem;
        color: #999;
        text-align: center;
      }
    }
  }
  }
</style>
