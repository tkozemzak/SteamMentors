import axios from 'axios'
// const BASE_URL = 'http://10.2.21.230:8000'
const BASE_URL = 'http://192.168.1.9:8000'
// const BASE_URL = 'http://192.168.43.21:8000'


export const FETCH_USER_NEWS = "FETCH_USER_NEWS"
export const FETCH_RANDOM_NEWS = "FETCH_RANDOM_NEWS"



export const fetchUserNews = (id) => {
  return dispatch => {
    axios.get(`${BASE_URL}/everything/${id}`)
      .then(response =>
        dispatch ({
        type: FETCH_USER_NEWS,
        payload: response.data
      }))
  }
}

export const fetchRandomNews = (id) => {
  return dispatch => {
    axios.get(`${BASE_URL}/news/${id}`)
      .then(response =>
        dispatch ({
        type: FETCH_RANDOM_NEWS,
        payload: response.data
      }))
  }
}
