import {
  FETCH_NEWS,
  FETCH_NEWS_PICS
} from '../actions/newsActions'

let initialState = {
  currentNews: {},
  newsPics: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
      case FETCH_NEWS:
        return{
          ...state,
          currentNews: {...action.payload}
        }
      case FETCH_NEWS_PICS:
        return{
          ...state,
          newsPics: {...action.payload}
        }

    default:
      return state;
  }
}
