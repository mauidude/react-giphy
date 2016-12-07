import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import app from './reducers';
import App from './containers/App';

let store = createStore(app,
  applyMiddleware(thunk)
);

export default class ReactGiphy extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
};

ReactDOM.render(
  <ReactGiphy />,
  document.getElementById('root')
);
