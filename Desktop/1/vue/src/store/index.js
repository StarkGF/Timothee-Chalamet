import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: [],
    obj: {
      page: 1,
      amount: -1
    },
    allPage: 0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
