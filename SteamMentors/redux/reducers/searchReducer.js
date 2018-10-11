import {
  SEARCH_USERS
} from '../actions/searchActions'

let initialState = {
  searchResults: []
}

export default (state = initialState, action) => {
  switch (action.type) {
      case SEARCH_USERS:
      console.log("action payload in reducer for search users", action.payload);
        return{
          ...state,
          searchResults: action.payload
        }


    default:
      return state;
  }
}
