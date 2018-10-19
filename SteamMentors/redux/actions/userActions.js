import axios from 'axios'
// const BASE_URL = 'http://10.2.83.224:8000'
const BASE_URL = 'http://192.168.1.4:8000'
// const BASE_URL = 'http://192.168.1.9:8000'

export const FETCH_USERS = "FETCH_USERS"
export const USER_LOGOUT = "USER_LOGOUT"
export const GUEST_LOGIN = "GUEST_LOGIN"
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'



export const userLogout = () => {
  return dispatch => {
    dispatch({
      type: USER_LOGOUT
    })
  }
}

export const guestLogin = () => {
  return dispatch => {
    dispatch({
      type: GUEST_LOGIN
    })
  }
}


export const userLogin = (creds, history) => {
  return async dispatch => {
    try {
      dispatch({type: USER_LOGIN_PENDING})
      let userObject = await axios.post(`${BASE_URL}/login`, creds)
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userObject
      })
      history.push('/news')
    } catch(err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
      history.push('/')
    }
  }
};


export const userSignup = (creds, history) => {
  console.log(creds);
  return async dispatch => {
    try {
      dispatch({type: USER_SIGNUP_PENDING})
      let userObject = await axios.post(`${BASE_URL}/register`, creds)
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: JSON.stringify(userObject)
      })
      history.push('/news')
    } catch(err) {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: err
      })
      history.push('/')
    }
  }
};
