import React, { Component } from 'react';
import { connect } from 'react-redux';
import HighlightsIndex from './highlights_index';
import SearchBar from './search_bar';
import TagsIndex from './tags_index';
import { fetchTags } from '../actions/index';

export default class Wrapper extends Component {
  componentWillMount() {
    this.props.fetchTags();
  }

  render() {
    return (
      <div className="wrapper">
        <TagsIndex tags={this.props.tags} />
        <SearchBar />
        <HighlightsIndex tags={this.props.tags} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tags: state.tags.all };
}

export default connect(mapStateToProps, { fetchTags })(Wrapper);
