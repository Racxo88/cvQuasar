import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isLogged: false,
    studentId: -1,
    userId: -1,
    degree: undefined
  },

  mutations: {
    logged (state, isLogged) {
      state.isLogged = isLogged
    },
    setStudent (state, studentId) {
      state.studentId = studentId
    },
    setUser (state, userId) {
      state.userId = userId
    },
    setCurrentDegree (state, degree) {
      state.degree = degree
    }
  }
})
export default store
