// Action types:
export const SEARCH_REQUESTED = 'SEARCH_REQUEST';
export const SEARCH_RECEIVED = 'SEARCH_RECEIVED';

// Action creators:
export function requestSearch(query) {
  // ES6: {x} is equivalent to {x: x}
  return {
    type: SEARCH_REQUESTED,
    query
  };
};

export function receivedSearch(gifs) {
  return {
    type: SEARCH_RECEIVED,
    gifs
  };
};
