import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHighlights } from '../actions/index';

class HighlightsIndex extends Component {
  componentWillMount() {
    this.props.fetchHighlights();
  }

  renderHighlights() {
    return this.props.highlights.map((highlight) => {
      return (
        <li className="list-group-item" key={highlight._id}>
          <h5>Title: {highlight.title}</h5>
          <h6>Description: {highlight.description}</h6>
        </li>
      );
    });
  }

  render() {
    if (!this.props.highlights) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Highlights</h3>
        <ul className="list-group">
          {this.renderHighlights()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { highlights: state.highlights }
}

export default connect(mapStateToProps, { fetchHighlights })(HighlightsIndex);
