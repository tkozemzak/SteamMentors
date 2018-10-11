import axios from 'axios'
const BASE_URL = 'http://10.2.83.224:8000'

export const SEARCH_USERS = "SEARCH_USERS"

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
