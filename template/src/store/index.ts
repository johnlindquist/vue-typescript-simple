import Vue from 'vue'
import Vuex from 'vuex'
import { UPDATE_MESSAGE, UPDATE_FEEDBACK } from './mutation-types'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    message: `Click this to change the 'message' to the current time`,
    feedback: `Type here to change the 'feedback'`
  },
  mutations: {
    [UPDATE_MESSAGE](state, message) {
      state.message = message ? message : (new Date()).toString()
    },
    [UPDATE_FEEDBACK](state, feedback) {
      state.feedback = feedback
    }
  },
  actions: {
    updateMessage({ commit }) {
      commit(UPDATE_MESSAGE)
    },
    updateFeedback({ commit }, event) {
      commit(UPDATE_FEEDBACK, event.target.value)
    }
  }
})