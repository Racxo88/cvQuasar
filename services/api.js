import axios from 'axios'
import constants from '../config/constants'
import store from '../src/vuex/store'
axios.defaults.baseURL = constants.apiUrl
const api = {
  logIn: (credentials) => {
    return axios.post('/users/login', {
      email: credentials.email,
      password: credentials.password
    })
    .then((response) => {
      if (response.status === 200) {
        store.commit('logged', true)
        console.log('Exito')
      }
    })
  }
}
export default api

