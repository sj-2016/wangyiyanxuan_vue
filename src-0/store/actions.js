/*vue的actions模块*/
import {
  reqData,
  reqBanner,
  reqHome,
  reqDetail,
  reqNav
} from '../api'
import {
  DATA,
  BANNER,
  HOME,
  DETAIL,
  NAV,
  LOGINWAY
} from './mutation-types'
export default {
  //获取首页data信息
  async getData({commit},cb){
    const result = await reqData();
    commit(DATA,{data:result.data});
    cb && cb()
  },
  //获取首页banner信息
  async getBanner({commit},cb){
    const result = await reqBanner();
    commit(BANNER,{banner:result.focusList});
    cb && cb()
  },
  //获取home信息
  async getHome({commit},cb){
    const result = await reqHome();
    commit(HOME,{result});
    cb && cb()
  },
  //获取detail页面
  async getDetail({commit},cb){
    const result = await reqDetail();
    commit(DETAIL,{result});
    cb && cb()
  },
  //获取nav
  async getNav({commit},cb){
    const result = await reqNav();
    commit(NAV,{result});
    cb && cb()
  },
  //设置loginWay
  setLoginWay({commit},loginWay){
    commit(LOGINWAY,loginWay)
  }
}
