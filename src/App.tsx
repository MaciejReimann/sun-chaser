import React, { Component } from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./containers/SearchBar";

interface Coords {
  longitude: null | number;
  latitude: null | number;
}

interface State {
  coords: Coords;
  images: [];
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
      images: [],
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
    this.getCoordinates();
    this.getPhotoForLocation("krakow");
  }

  getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      this.onSuccess,
      this.onError,
      options
    );
  };
  onSuccess = (position: Position) => {
    this.setState({ coords: position.coords });
  };
  onError = (positionError: PositionError) => this.setState({ positionError });

  getPhotoForLocation = async (location: any) => {
    // abstract this as function defined in unsplash
    const response = await unsplash.get(`search/photos`, {
      params: { query: location }
    });
    this.setState({ images: response.data.results }); // provide this as a callback to the above function
  };
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
