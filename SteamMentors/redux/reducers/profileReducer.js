import {
  FETCH_USER_GAMES
} from '../actions/profileActions'

let initialState = {
  currentUserGames: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
      case FETCH_USER_GAMES:
      console.log("fetchusergames payload", action.payload);
        return{
          ...state,
          currentUserGames: {...action.payload}
        }

    default:
      return state;
  }
}
