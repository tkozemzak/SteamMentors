import { combineReducers } from 'redux'
import users from './userReducer'
import news from './newsReducer'
import profile from './profileReducer'


export default combineReducers({ users, news, profile })
