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
  }
}
export default api
