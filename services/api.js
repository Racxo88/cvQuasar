import axios from 'axios'
// import constants from '../config/constants'
import store from '../src/vuex/store'
const api = {

  getLoggedStudent: () => {
    return axios.get('students/user/' + store.state.userId)
    .then((response) => {
      store.commit('setStudent', response.data.id)
      return response.data
    })
  },
  createStudent: (student) => {
    return axios.post('students/user/' + store.state.userId, {
      name: student.name,
      lastName: student.lastName,
      country: student.country,
      birthday: student.birthday,
      genre: student.genre
    })
    .then((response) => {
      store.commit('setStudent', response.data.id)
      return response.data
    })
  }

}
export default api
