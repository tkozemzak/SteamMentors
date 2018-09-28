import axios from 'axios'
import { key } from '../../ignore/Key'
const BASE_URL = 'http://10.2.83.224:8000'
const random = Math.floor((Math.random() * 100000) + 1)

export const FETCH_NEWS = "FETCH_NEWS"
export const FETCH_NEWS_PICS = "FETCH_NEWS_PICS"



export const fetchNews = () => {
  return dispatch => {
    axios.get(`${BASE_URL}/news`)
      .then(response =>
        dispatch ({
        type: FETCH_NEWS,
        payload: response.data
      }))
  }
}

export const fetchNewsPics = (appid) => {
  return dispatch => {
    axios.get(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json`)
      .then(response =>
        dispatch ({
        type: FETCH_NEWS_PICS,
        payload: response.data
      }))
  }
}
