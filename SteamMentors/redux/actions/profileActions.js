import axios from 'axios'
const BASE_URL = 'http://10.2.83.224:8000'

export const FETCH_USER_GAMES = "FETCH_USER_GAMES"



export const fetchUserGames = () => {
  return dispatch => {
    axios.get(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json`)
      .then(response =>
        dispatch ({
        type: FETCH_USER_GAMES,
        payload: response.data
      }))
  }
}
