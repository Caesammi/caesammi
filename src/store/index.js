import Vue from 'vue'
import Vuex from 'vuex'
import {Message} from 'element-ui'
import * as storageTool from '../tools/zcTools'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:'我是原始值',
    vuexTest:'',
    sessionTest:storageTool.getSession('sessionTest')
  },
  mutations: {
    changeUserName(state,d){
      if(d===state.userName){
        Message.error('该参数与之前相同，已返回')
        return
      }
      state.userName=d
      },
    set_sessionTest(state,d){
      state.sessionTest = d
    }
    },
  getters:{
    getUserName(state){
      return state.userName
    }
  },
  actions: {
    changeUserName({commit}, d){
      commit('changeUserName', d)
    },
    set_sessionTest({commit}, d){
      commit('set_sessionTest', d)
      storageTool.setSession('sessionTest', d)
    }
  },
  modules: {
  }
})
