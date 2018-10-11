import { combineReducers } from 'redux'
import users from './userReducer'
import news from './newsReducer'
import profile from './profileReducer'
import search from './searchReducer'
import { USER_LOGOUT } from '../actions/userActions'


const appReducer = combineReducers({ users, news, profile, search })

export default (state, action) => {
  if(action.type === "USER_LOGOUT"){

    state = undefined
  }
  return appReducer(state, action)
}
