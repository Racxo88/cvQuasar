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
      genre: student.genre,
      money: 500
    })
    .then((response) => {
      store.commit('setStudent', response.data.id)
      return response.data
    })
  },
  deleteStudent: () => {
    return axios.delete('students/user/' + store.state.userId)
    .then((response) => {
      store.commit('setStudent', -1)
      return response
    })
  },
  createUser: (user) => {
    return axios.post('users/register/', {
      userName: user.userName,
      password: user.password,
      email: user.email
    })
    .then((response) => {
      return response.data
    })
  },
  getDegreesByStudent: () => {
    return axios.get('degrees/student/' + store.state.studentId)
    .then((response) => {
      return response.data
    })
  },
  getDegreesByNoStudent: () => {
    return axios.get('degrees/nostudent/' + store.state.studentId)
    .then((response) => {
      return response.data
    })
  }
}
export default api
