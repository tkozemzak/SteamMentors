import {
  FETCH_USER_GAMES,
  FETCH_GAME_INFO
} from '../actions/profileActions'

let initialState = {
  currentUserGames: [],
  currentGameInfo: []
}

export default (state = initialState, action) => {
  switch (action.type) {

      case FETCH_USER_GAMES:
      //console.log('action.payload', action.payload);
        return{
          ...state,
          currentUserGames: action.payload
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
