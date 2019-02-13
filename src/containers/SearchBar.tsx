import React, { Component } from "react";

interface State {
  inputValue: string;
}

export default class SearchBar extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  render() {
    return (
      <div>
        <form className="input-group">
          <input
            placeholder="Give a five-day forcast in your favourite places"
            className="from-control"
            value={this.state.inputValue}
            onChange={e => this.onInputChange(e.target.value)}
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
  onInputChange = (inputValue: string) => this.setState({ inputValue });
}
