import React, { Component } from 'react';

export default ({ highlight }) => {
  return (
    <li className="list-group-item">
      <div className="dropdown">
        <button className="btn btn-info btn-sm dropdown-toggle pull-left" type="button" id="dropdownMenu1"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span className="caret"></span>
        </button>
      </div>
      <h5 className="highlight-title">
        <a href={highlight.url}>{highlight.title}</a>
          <i onClick={() => this.onDeleteHighlight(highlight._id)} className="fa fa-trash pull-right trash"></i>
      </h5>
      <h6 className="highlighted-text">"{highlight.description}"</h6>
    </li>
  );
}
