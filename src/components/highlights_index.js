import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHighlights, deleteHighlight } from '../actions/index';

class HighlightsIndex extends Component {
  constructor(props) {
    super(props)

    this.onDeleteHighlight = this.onDeleteHighlight.bind(this);
  }

  componentWillMount() {
    this.props.fetchHighlights();
  }

  onDeleteHighlight(id) {
    debugger
    this.props.deleteHighlight(id);
  }

  renderHighlights() {
    return this.props.activeHighlights.map((highlight) => {
      return (
        <li className="list-group-item" key={highlight._id}>
          <h5 className="highlight-title">
            <a href={highlight.url}>{highlight.title}</a>
              <span onClick={() => this.onDeleteHighlight(highlight._id)} className="fa fa-trash pull-right trash"></span>
          </h5>
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

export default connect(mapStateToProps, { fetchHighlights, deleteHighlight })(HighlightsIndex);
