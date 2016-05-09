import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editHighlight, deleteHighlight } from '../actions/action_highlights';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class HighlightIndexItem extends Component {
  handleTagClick(event) {
    debugger
    this.props.editHighlight(this.props.highlight._id, event.currentTarget.value);
  }

  renderTags() {
    return this.props.tags.map((tag, key) => {
      return (
        <div
          className="highlight-index-tag-item"
          onClick={this.handleTagClick.bind(this)}
          key={key}
          value={tag.title}>
          <MenuItem>
            {tag.title}
          </MenuItem>
        </div>
      );
    });
  }

  onDeleteHighlight(id) {
    this.props.deleteHighlight(id);
  }

  render() {
    const highlight = this.props.highlight;

    return (
      <li className="list-group-item">
        <div className="list-group-header">
          <ButtonToolbar className="pull-left highlight-index-item-tag">
            <DropdownButton id="dropdown" bsSize="small" title="Tags">
              {this.renderTags()}
            </DropdownButton>
          </ButtonToolbar>
          <h6 className="highlight-title">
            <a href={highlight.url}>{highlight.title}</a>
              <i onClick={() => this.onDeleteHighlight(highlight._id)} className="fa fa-trash pull-right trash"></i>
          </h6>
        </div>
        <h6 className="highlighted-text">"{highlight.description}"</h6>
      </li>
    );
  }
}

export default connect(null, { editHighlight, deleteHighlight })(HighlightIndexItem);
