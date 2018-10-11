import axios from 'axios'
const BASE_URL = 'http://10.2.83.224:8000'

export const SEARCH_USERS = "SEARCH_USERS"



export const searchUsers = (input) => {
  return dispatch => {
    axios.post(`${BASE_URL}/search`, input)
      .then(response =>
        dispatch ({
        type: SEARCH_USERS,
        payload: response.data
      }))
  }
}
