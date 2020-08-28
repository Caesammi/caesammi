import Vue from 'vue'
import Vuex from 'vuex'
import {Message} from 'element-ui'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:'我是原始值',
    vuexTest:'',
    theme:'',
  },
  mutations: {
    changeUserName (state,d){
      if(d===state.userName){
        Message.error('该参数与之前相同，已返回')
        return
      }
      state.userName=d
      },

    changeTheme (state,d){
      state.theme=d
    }
    },
  getters:{
    getUserName(state){
      return state.userName
    }
  },
  actions: {
    changeUserName({commit},val){
      console.log(val)
      commit('changeUserName',val)
    }
  },
  modules: {
  }
})
