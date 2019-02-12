import React, { Component } from "react";
import { string } from "prop-types";

export default class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: string
  //   };
  // }
  // inputHandler = e => {
  //   this.setState({ value: e.target.value });
  // };

  render() {
    return (
      <div>
        <form className="input-group">
          <input
            placeholder="Give a five-day forcast in your favourite places"
            className="from-control"
            // value={this.state.value}
            // onChange={this.inputHandler}
            type="text"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}
