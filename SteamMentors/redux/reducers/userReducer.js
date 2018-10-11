import {
  FETCH_USERS,
  GUEST_LOGIN,
  USER_LOGIN,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED
} from '../actions/userActions'

let initialState = {
  currentUser: {},
  isLoggedIn: false,
  isGuest: true,
  isLoading: false,
  showLoginError: false,
  showSignupError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_PENDING:
    console.log("pending");

      return {...state, isLoading: true}
    case USER_SIGNUP_SUCCESS:
    console.log("success");

      return {...state, isLoading: false, currentUser: {...action.payload}}
    case USER_SIGNUP_FAILED:
    console.log("failed");

      return {...state, isLoading: false, showSignupError: true}
    case USER_LOGIN_PENDING:
    console.log("pending");

      return {...state, isLoading: true}
    case USER_LOGIN_SUCCESS:
    console.log("success");
      return {...state, isLoading: false, isLoggedIn: true, currentUser: {...action.payload}}
    case USER_LOGIN_FAILED:
    console.log("fail");
      return {...state, isLoading: false, showLoginError: true}
    case GUEST_LOGIN:
      return{
        ...state,
        isGuest: true
      }

    default:
      return state;
  }
}
