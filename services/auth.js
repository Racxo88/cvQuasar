import axios from 'axios'
import constants from '../config/constants'
import store from '../src/vuex/store'
axios.defaults.baseURL = constants.apiUrl
const auth = {
  logIn: (credentials) => {
    return axios.post('/users/login', {
      email: credentials.email,
      password: credentials.password
    })
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        store.commit('logged', true)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
        console.log('Exito')
      }
    })
  }
}
export default auth

