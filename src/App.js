import React, { Component } from 'react';
import './App.css';

import SearchBar from './containers/SearchBar-container'

class App extends Component {
  render() {
    return (
      <div className="App">

        <SearchBar />
      </div>
    );
  }
}

export default App;
