import React, { Component } from "react";
import SearchBar from "./containers/SearchBar";
import keys from "./keys/index";

interface Coords {
  longitude: null | number;
  latitude: null | number;
}

interface State {
  coords: Coords;
  // position: Position;
  positionError: {};
}

export default class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      coords: {
        longitude: null,
        latitude: null
      },
      positionError: {}
    };
  }

  render() {
    return (
      <div className="App">
        SearchBar goes here!
        <SearchBar />
      </div>
    );
  }

  componentDidMount() {
    console.log(keys);
    navigator.geolocation.getCurrentPosition(
      this.onSuccess,
      this.onError,
      options
    );
  }
  onSuccess = (position: Position) => {
    this.setState({ coords: position.coords });
  };
  onError = (positionError: PositionError) => this.setState({ positionError });
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
