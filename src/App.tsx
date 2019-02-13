import React, { Component } from "react";
import SearchBar from "./containers/SearchBar";

interface State {
  position: Position;
  positionError: {};
}

export default class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      position: {
        coords: {
          longitude: 0,
          latitude: 0,
          accuracy: 0,
          altitude: 0,
          altitudeAccuracy: 0,
          heading: 0,
          speed: 0
        },
        timestamp: 0
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
    navigator.geolocation.getCurrentPosition(
      this.onSuccess,
      this.onError,
      options
    );
  }
  onSuccess = (position: Position) => {
    this.setState({ position });
  };
  onError = (positionError: PositionError) => this.setState({ positionError });
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
