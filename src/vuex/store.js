import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isLogged: false
  },

  mutations: {
    logged (state, isLogged) {
      state.isLogged = isLogged
    }
  }
})
export default store
