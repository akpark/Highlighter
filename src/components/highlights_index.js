import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHighlights } from '../actions/index';

class HighlightsIndex extends Component {
  componentWillMount() {
    this.props.fetchHighlights();
  }

  renderHighlights() {
    return this.props.activeHighlights.map((highlight) => {
      return (
        <li className="list-group-item" key={highlight._id}>
          <h5 className="highlight-title"><a href={highlight.url}>{highlight.title}</a> <i className="fa fa-trash pull-right"></i></h5>
          <h6 className="highlighted-text">{highlight.description}</h6>
        </li>
      );
    });
  }

  render() {
    if (!this.props.activeHighlights) {
      return <div>Loading...</div>;
    }

    return (
      <div className="highlights-index">
        <ul className="list-group">
          {this.renderHighlights()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { activeHighlights: state.highlights.active }
}

export default connect(mapStateToProps, { fetchHighlights })(HighlightsIndex);
