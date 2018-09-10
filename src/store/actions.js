import {
  RECEIVE_HEADER,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_EWITEMLISTS2,
  RECEIVE_REQFLASHSALEINDEXVO,
  RECEIVE_REQTOPICLISTS,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATEGORYS,
  RECEIVE_BANNERS,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_GETFINDMORE,
  RECEIVE_YZM
} from './mutation-types'
import {
  reqHeadCateList,
  reqFocusList,
  reqTagList,
  reqNewitemlists,
  reqNewitemlists2,
  reqFlashSaleIndexVO,
  reqTopicLists,
  reqCateList,
  reqCategoryData,
  reqBanners,
  reqColumn,
  reqRecommend,
  reqTenfifteen,
  reqFindMore,
  reqyzm
} from '../api'

export default {
  // 异步获取头部导航信息
  async getHeaderNav ({commit}) {
    let result = await reqHeadCateList();
    if(result.code === 0){
      const headerList = result.data;
      commit(RECEIVE_HEADER, {headerList})
    }
  },
// 异步获取首页活动列表
  async getFocusList ({commit}) {
    let result = await reqFocusList();
    if(result.code === 0){
      const focusList = result.data;
      commit(RECEIVE_FOCUSLIST, {focusList})
    }
  },
  // 异步获取首页品牌列表
  async getTagList ({commit}) {
    let result = await reqTagList();
    if(result.code === 0){
      const tagList = result.data;
      commit(RECEIVE_TAGLIST, {tagList})
    }
  },
  //异步获取首页新品首发列表
  async getnewitemlists ({commit}) {
    let result = await reqNewitemlists();
    if(result.code === 0){
      const newitemlists = result.data;
      commit(RECEIVE_NEWITEMLISTS, {newitemlists})
    }
  },
  //异步获取首页人气推荐列表
  async getnewitemlists2 ({commit}) {
    let result = await reqNewitemlists2();
    if(result.code === 0){
      const newitemlists2 = result.data;
      commit(RECEIVE_EWITEMLISTS2, {newitemlists2})
    }
  },
  //异步获取限时购列表
  async getflashSaleIndexVO ({commit}) {
    let result = await reqFlashSaleIndexVO();
    if(result.code === 0){
      const flashSaleIndexVO = result.data;
      commit(RECEIVE_REQFLASHSALEINDEXVO, {flashSaleIndexVO})
    }
  },
  //异步获取专题精选
  async gettopicLists ({commit}) {
    let result = await reqTopicLists();
    if(result.code === 0){
      const topicLists = result.data;
      commit(RECEIVE_REQTOPICLISTS, {topicLists})
    }
  },
//异步居家好物
  async getcateList ({commit}) {
    let result = await reqCateList();
    if(result.code === 0){
      const cateList = result.data;
      commit(RECEIVE_TOPICLISTS, {cateList})
    }
  },
//异步分类
  async getcategorys ({commit}) {
    let result = await reqCategoryData();
    if(result.code === 0){

      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
//识物
  async getbanners ({commit}) {
    let result = await reqBanners();
    if(result.code === 0){
      const banners = result.data;
      commit(RECEIVE_BANNERS, {banners})
    }
  },
//识物下边
  async getcolumn ({commit}) {
    let result = await reqColumn();
    if(result.code === 0){
      const column = result.data;
      commit(RECEIVE_COLUMN, {column})
    }
  },
  //识物为你推荐
  async getrecommend ({commit}) {
    let result = await reqRecommend();
    if(result.code === 0){
      const recommend = result.data;
      commit(RECEIVE_RECOMMEND, {recommend})
    }
  },
  //十点一刻
  async  gettenfifteen ({commit}) {
    let result = await reqTenfifteen();
    if(result.code === 0){
      const tenfifteen = result.data;
      commit(RECEIVE_TENFIFTEEN, {tenfifteen})
    }
  },
  //更多精彩
  async  getfindMore ({commit}) {
    let result = await reqFindMore();

    if(result.code === 0){
      const findMore = result.data;
      commit(RECEIVE_GETFINDMORE, {findMore})
    }
  },
//yzm
  async  getyzm ({commit}) {
    let result = await reqyzm();
    if(result.code === 0){
      const yzm = result.data;
      commit(RECEIVE_YZM, {yzm})
    }
  },
}
