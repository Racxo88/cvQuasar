import axios from 'axios'
import constants from '../config/constants'
axios.defaults.baseURL = constants.apiUrl
const api = {
  logIn: (credentials) => {
    return axios.post('/users/login', {
      email: credentials.email,
      password: credentials.password
    })
  }
}
export default api

