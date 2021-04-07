import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: "UDON",
      phone: '0929864747'
    }
  },
  mutations: {
    addData(state) {
      state.user.gender = 'male';
      Vue.set(state, 'clicked', false);
    }
  },
  actions: {
  },
  modules: {
  }
})
