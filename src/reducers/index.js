import { ADD_ARTICLE } from '../constants/action-types'
const initialState = {
  articles: []
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    // new state obj needed so
    //    use concat, slice and spread for arrays
    //    use Object.assign and spread for objects
    return Object.assign({}, state, {
      articles: state.articles.concat([action.payload])
    })
  }
  return state
}

export default rootReducer
