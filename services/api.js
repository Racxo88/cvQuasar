import axios from 'axios'
// import constants from '../config/constants'
import store from '../src/vuex/store'
const api = {

  getLoggedStudent: () => {
    console.log(store.state.isLogged)
    return axios.get('students/user/' + store.state.userId)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
  }
}
export default api
