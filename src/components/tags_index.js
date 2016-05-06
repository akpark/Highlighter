import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTag } from '../actions/action_tags';
import Modal from 'react-modal';

const customStyles = {
  content: {
    position: 'fixed',
    top: '25%',
    left: '25%',
    right: '25%',
    bottom: '25%'
  }
}

class TagsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      newTagTitle: ''
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderTags() {
    return this.props.tags.map((tag) => {
      return <li key={tag._id} className="tag-index-item">{tag.title}</li>;
    })
  }

  onInputChange(event) {
    this.setState({ newTagTitle: event.target.value });
  }

  onFormSubmit(event) {
    if (this.state.newTagTitle) {
      this.props.createTag(this.state.newTagTitle);
    }
  }

  render() {
    return (
      <div className="side-menu-container col-xs-3 col-sm-3 col-md-3 col-lg-3 side-menu ">
        <button type="button" className="" onClick={this.openModal}><i className="fa fa-plus-square-o"></i></button>
        <nav className="navbar navbar-default">
          <h3>Tags</h3>
          <ul className="nav navbar-nav nav-pills nav-stacked" >
            {this.renderTags()}
          </ul>
        </nav>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>

          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              placeholder="New Tag Name"
              className="form-control"
              value={this.state.newTagTitle}
              onChange={this.onInputChange}/>
            <span className="input-group-btn">
              <button className="btn btn-default">Create</button>
            </span>
          </form>
        </Modal>
    </div>
    )
  }
}

export default connect(null, {createTag})(TagsIndex);
