import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:'我是原始值',
    vuexTest:''
  },
  mutations: {
    changeUserName (d){
      this.state.userName=d
      }
    },
  getters:{
    getUserName(state){
      return state.userName
    }
  },
  actions: {
    changeUserName({commit},val){
      commit('changeUserName',val)
    }
  },
  modules: {
  }
})
