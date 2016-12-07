import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import app from './reducers';
import App from './containers/App';

let store = createStore(app);

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
