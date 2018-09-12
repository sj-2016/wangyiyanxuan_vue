<!--底部导航-->
<template>
  <div class="footer">
    <div @click="goto('/home')" :class="{active: $route.path==='/homepage/homenavcontent/1'}">
      <p>
        <i class="iconfont icon-shouye"></i>
      </p>
      <span>首页</span>
    </div>
    <div  @click="goto('/knowthings')" :class="{active: $route.path==='/knowthings'}">
      <p>
        <i class="iconfont icon-bd-"></i>
      </p>
      <span>识物</span>
    </div>
    <div @click="goto('/category')" :class="{active: $route.path==='/category'}">
      <p>
        <i class="iconfont icon-iconyihuifu-"></i>
      </p>
      <span>分类</span>
    </div>
    <div @click="goto('/cart')" :class="{active: $route.path==='/cart'}">
      <p >
        <i class="iconfont icon-icon"></i>
      </p>
      <span>购物车</span>
    </div>
    <div @click="goto('/personal')" :class="{active: $route.path==='/personal'}">
      <p >
        <i class="iconfont icon-geren"></i>
      </p>
      <span>个人</span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods: {
      goto (path) {
        console.log(111);
        this.$router.replace(path);
      }
    }
  }
</script>

<style  lang="less">
  @import "../../common/less/blend";
  .footer{
    position: absolute;
    width:100%;
    bottom: 0;
    display: flex;
    z-index: 100;
    justify-content: space-around;
    background: #fff;

    &>div{
      margin-bottom: .15rem;
      p{
        text-align: center;
        i{
          font-size: 48/@rem;
          color: #666;
        }
      }
      span{
        display: block;
        color: #666;
        text-align: center;
        font-size: 24/@rem;
        margin-top: 2/@rem;
      }
    }
    &>.active{
      p{
        i{
          color:#b4282d ;
        }
      }
      span{
        color:#b4282d ;
      }
    }
  }
</style>
