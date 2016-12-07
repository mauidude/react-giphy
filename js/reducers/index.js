import * as actions from '../actions';
import { combineReducers } from 'redux';

function search(state = {query: ''}, action) {
  switch (action.type) {
    case actions.SEARCH_REQUESTED:
      // ES6: {...x, ...y} is equivalent to Object.assign({}, x, y)
      return {
        ...state,
        query: action.query
      };
  }

  return state;
};

function receiveGifs(state = {gifs: []}, action) {
  switch (action.type) {
    case actions.SEARCH_RECEIVED:
      return {
        ...state,
        gifs: action.gifs
      };
  }

  return state;
}

export default combineReducers({
  search,
  gifs: receiveGifs
});
