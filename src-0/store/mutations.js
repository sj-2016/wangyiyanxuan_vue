
import {
  DATA,
  BANNER,
  HOME,
  DETAIL,
  NAV,
  LOGINWAY
} from './mutation-types'
export default {
  [DATA](state,{data}) {
    state.data = data
  },
  [BANNER](state,{banner}) {
    state.banner = banner
  },
  [HOME](state,{result}) {
    const {home} = result
    state.home = home
  },
  [DETAIL](state,{result}) {
    const {detail} = result
    state.detail = detail
  },
  [NAV](state,{result}) {
    const {nav} = result
    state.nav = nav
  },
  [LOGINWAY](state,loginWay) {
    state.loginWay = loginWay
  },
}
