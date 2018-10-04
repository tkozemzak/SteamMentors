import {
  FETCH_USER_NEWS,
  FETCH_RANDOM_NEWS,
  FETCH_GAME_NAME
} from '../actions/newsActions'

let initialState = {
  currentNews: [],
  gameName: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
      case FETCH_USER_NEWS:
        return{
          ...state,
          currentNews: {...action.payload}
        }
      case FETCH_RANDOM_NEWS:
        return{
          ...state,
          currentNews: action.payload
        }

    default:
      return state;
  }
}
