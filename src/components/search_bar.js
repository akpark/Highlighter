import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchHighlights, filterHighlights } from '../actions/action_highlights';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    if (event.target.value == "") {
      this.props.filterHighlights(this.props.tags.active);
    } else {
      this.props.searchHighlights(event.target.value);
    }
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.searchHighlights(this.state.term);
  }

  render() {
    return (
      <div className="search-bar col-xs-9 col-sm-9 col-md-9 col-lg-9 pull-right">
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tags: state.tags }
}

export default connect(mapStateToProps, { searchHighlights, filterHighlights })(SearchBar);
