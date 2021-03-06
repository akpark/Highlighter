import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHighlights, deleteHighlight, filterHighlights } from '../actions/action_highlights';
import HighlightIndexItem from './highlight_index_item';

class HighlightsIndex extends Component {
  constructor(props) {
    super(props)

    this.onDeleteHighlight = this.onDeleteHighlight.bind(this);
  }

  componentWillMount() {
    this.props.fetchHighlights();
  }

  onDeleteHighlight(id) {
    this.props.deleteHighlight(id);
  }

  renderHighlights() {
    return this.props.activeHighlights.map((highlight) => {
      if (this.props.activeTag === "all" || highlight.tag_id === this.props.activeTag) {
        return <HighlightIndexItem key={highlight._id} tags={this.props.tags} highlight={highlight} />;
      }
    });
  }

  render() {
    return (
      <div className="highlights-index col-xs-9 col-sm-9 col-md-9 col-lg-9 pull-right">
        <ul className="list-group">
          {this.renderHighlights()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeHighlights: state.highlights.active,
    activeTag: state.tags.active
  };
}

export default connect(mapStateToProps, { fetchHighlights, deleteHighlight })(HighlightsIndex);
