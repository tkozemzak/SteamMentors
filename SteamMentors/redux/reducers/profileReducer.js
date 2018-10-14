import {
  FETCH_USER_GAMES,
  FETCH_GAME_INFO,
  FETCH_MESSAGES
} from '../actions/profileActions'

let initialState = {
  currentUserGames: [],
  currentMessages: [],
  currentGameInfo: []
}

export default (state = initialState, action) => {
  switch (action.type) {

      case FETCH_USER_GAMES:
        return{
          ...state,
          currentUserGames: action.payload
        }
      case FETCH_MESSAGES:
        return{
          ...state,
          currentMessages: action.payload
        }
      case FETCH_GAME_INFO:
        return{
          ...state,
          currentGameInfo: state.currentGameInfo.concat(action.payload)
        }

    default:
      return state;
  }
}
