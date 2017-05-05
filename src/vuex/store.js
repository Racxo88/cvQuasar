import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isLogged: false,
    studentId: -1,
    userId: -1
  },

  mutations: {
    logged (state, isLogged) {
      state.isLogged = isLogged
    },
    setStudent (state, studentId) {
      state.studentId = studentId
    },
    setUser (state, userId) {
      state.studentId = userId
    }
  }
})
export default store
