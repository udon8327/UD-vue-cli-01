import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      name: "UDON",
      phone: '0929864747'
    },
    profile: {}
  },
  mutations: {
    addData(state) {
      state.user.gender = 'male';
      Vue.set(state, 'clicked', false);
    },
    setProfile(state, data) {
      state.profile = data;
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
