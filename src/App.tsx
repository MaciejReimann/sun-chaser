import React, { Component } from "react";
import SearchBar from "./containers/SearchBar";

class App extends Component {
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.error(err)
    );
  }
  render() {
    return (
      <div className="App">
        {" "}
        SearchBar goes here!
        <SearchBar />
      </div>
    );
  }
}

export default App;
