import React, { Component } from 'react';

class HighlightIndexItem extends Component {
  renderTags() {
    return this.props.tags.map((tag) => {
      return <li key={tag._id}><a href="#">{tag.title}</a></li>;
    });
  }

  render() {
    const highlight = this.props.highlight;

    return (
      <li className="list-group-item">
        <div className="dropdown">
          <button className="btn btn-sm dropdown-toggle pull-left" type="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="true"><span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            {this.renderTags()}
          </ul>
        </div>
        <h5 className="highlight-title">
          <a href={highlight.url}>{highlight.title}</a>
            <i onClick={() => this.onDeleteHighlight(highlight._id)} className="fa fa-trash pull-right trash"></i>
        </h5>
        <h6 className="highlighted-text">"{highlight.description}"</h6>
      </li>
    );
  }
}

export default HighlightIndexItem;
