import React, { Component } from 'react';
//test

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div> 
        <form 
          onSubmit={this.onFormSubmit}
          className="input-group"          
          >
          <input 
            placeholder = "Give a five-day forcast in your favourite places"
            className = "from-control"
            value = {this.state.term}
            onChange={this.onInputChange}
            type="text"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}
