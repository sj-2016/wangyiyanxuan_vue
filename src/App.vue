<template>
  <div class="main">
    <router-view/>
    <FooterGuide v-if="$route" v-show="$route.meta.isShow"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    name: 'App',
    components: {
      FooterGuide
    },
    mounted () {
      //dispath分发action  更新数据
      this.$store.dispatch('getFocusList');
      this.$store.dispatch('getTagList');
      this.$store.dispatch('getnewitemlists');
      this.$store.dispatch('getnewitemlists2');
      this.$store.dispatch('getflashSaleIndexVO');
      this.$store.dispatch('gettopicLists');
      this.$store.dispatch('getcateList')
    }
  }
</script>

<style lang="less" scoped>
  .main{
    height:100%;
  }
</style>
