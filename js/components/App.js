import React, { Component, PropTypes } from 'react';
import GifList from '../containers/GifList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  render() {
    return (
      <div>
        <div>
          <input type="search" placeholder="enter search" onChange={(e) => this.setState({query: e.target.value})} />
          <button onClick={() => this.props.onSearch(this.state.query)}>Search</button>
        </div>
        <GifList />
      </div>
    );
  };
};

App.propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func.isRequired
};
