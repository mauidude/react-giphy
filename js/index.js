import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ReactGiphy extends Component {
  render() {
    return (<h1>Hello, world</h1>);
  }
};

ReactDOM.render(
  <ReactGiphy />,
  document.getElementById('root')
);
