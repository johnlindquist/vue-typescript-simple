import Vue from 'vue'
import Vuex from 'vuex'
import { UPDATE_MESSAGE } from './mutation-types'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    message: 'Hello'
  },
  mutations: {
    [UPDATE_MESSAGE](state, payload) {
      state.message = (new Date()).toString()
    }
  },
  actions: {
    updateMessage({ commit }, payload) {
      commit(UPDATE_MESSAGE, payload)
    }
  }
})