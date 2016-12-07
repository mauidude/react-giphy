import React, { Component, PropTypes } from 'react';

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
        <input type="search" placeholder="enter search" onChange={(q) => this.setState({query: q})} />
        <button onClick={() => this.props.onSearch(this.state.query)}>Search</button>
      </div>
    );
  };
};

App.propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func.isRequired
};
