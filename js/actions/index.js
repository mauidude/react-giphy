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

export function search(query) {
  return (dispatch) => {
    dispatch(requestSearch(query));
    dispatch(receivedSearch([]));

    return fetch(`http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=dc6zaTOxFJmzC`)
      .then((response) => response.json())
      .then((json) => dispatch(receivedSearch(json.data)))
      .catch((err) => console.error('error:', err));
  };
};
