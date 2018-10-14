import {
  SEARCH_USERS,
  SEND_MESSAGE
} from '../actions/searchActions'

let initialState = {
  searchResults: []
}

export default (state = initialState, action) => {
  switch (action.type) {
      case SEARCH_USERS:
        return{
          ...state,
          searchResults: action.payload
        }
      case SEND_MESSAGE:
        return{
          ...state
        }
    default:
      return state;
  }
}
