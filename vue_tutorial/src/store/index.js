import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    totalTime: 8
}
// 有且只有一个数据仓库
export default new Vuex.Store({
    state
})