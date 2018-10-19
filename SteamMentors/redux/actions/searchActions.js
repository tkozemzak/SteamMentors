import axios from 'axios'
// const BASE_URL = 'http://10.2.83.224:8000'
const BASE_URL = 'http://192.168.1.4:8000'
// const BASE_URL = 'http://192.168.1.9:8000'

export const SEARCH_USERS = "SEARCH_USERS"
export const SEND_MESSAGE = "SEND_MESSAGE"

export const searchUsers = (searchInput) => {
  return dispatch => {
    axios.post(`${BASE_URL}/search`, searchInput)
      .then(response =>
        dispatch ({
        type: SEARCH_USERS,
        payload: response.data
      }))
  }
}


export const sendMessage = (message) => {
  return dispatch => {
    axios.post(`${BASE_URL}/message`, message)
      .then(response =>
        dispatch ({
        type: SEND_MESSAGE
      }))
  }
}
