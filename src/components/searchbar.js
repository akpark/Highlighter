import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchHighlights } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  render() {


    return (
      <form onSubmit={this.onFormSubmit} className="input-group input-group-sm">
        <input
          placeholder="Search through your highlights"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button className="btn btn-primary">Search</button>
        </span>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { activeHighlights: state.activeHighlights };
}

export default connect(mapStateToProps, { searchHighlights })(SearchBar);
