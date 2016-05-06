import React, { Component } from 'react';

class TagsIndex extends Component {
  componentWillMount() {

  }

  renderTags() {
    // fetch tags
  }

  render() {
    return (
      <div className="side-menu-container col-xs-3 col-sm-3 col-md-3 col-lg-3 side-menu ">
        <nav className="navbar navbar-default">
          <h3>Tags</h3>
          <ul className="nav navbar-nav nav-pills nav-stacked" >
            <li className="tag-index-item">Recent</li>
            <li className="tag-index-item">Tag 2</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default TagsIndex
