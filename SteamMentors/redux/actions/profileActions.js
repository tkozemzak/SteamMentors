import axios from 'axios'
// const BASE_URL = 'http://10.2.21.230:8000'
const BASE_URL = 'http://192.168.1.9:8000'
// const BASE_URL = 'http://192.168.1.9:8000'


export const FETCH_USER_GAMES = "FETCH_USER_GAMES"
export const FETCH_MESSAGES = "FETCH_MESSAGES"
export const FETCH_GAME_INFO = "FETCH_GAME_INFO"



export const fetchUserGames = (id) => {
  //console.log('id in actioncreator', id);
  return dispatch => {
    axios.get(`${BASE_URL}/games/${id}`)
      .then(response =>
        dispatch ({
        type: FETCH_USER_GAMES,
        payload: response.data
      }))
  }
}

export const fetchMessages = (id) => {
  //console.log('id in actioncreator', id);
  return dispatch => {
    axios.get(`${BASE_URL}/message/${id}`)
      .then(response =>
        dispatch ({
        type: FETCH_MESSAGES,
        payload: response.data
      }))
  }
}

export const fetchGameInfo = (id) => {
  return dispatch => {
    axios.get(`${BASE_URL}/game/${id}`)
      .then(response =>
      dispatch ({
        type: FETCH_GAME_INFO,
        payload: response.data
      }))
  }
}
