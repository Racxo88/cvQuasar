import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isLogged: false
  },
  actions: {
    setLogged ({commit}, isLogged) {
      commit('EDIT_LOGGED', isLogged)
    }
  },
  mutations: {
    EDIT_LOGGED (state, isLogged) {
      state.isLogged = isLogged
    }
  },
  getters: {
    isLogged: state => { return state.isLogged }
  },
  modules: {
  }
})
export default store
