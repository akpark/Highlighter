import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTag, setActiveTag } from '../actions/action_tags';
import { filterHighlights } from '../actions/action_highlights';
import { Nav, NavItem, Modal, Button, FormGroup, FormControl, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

class TagsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      newTagTitle: ''
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onNewTagSubmit = this.onNewTagSubmit.bind(this);
    this.onClickHighlight = this.onClickHighlight.bind(this);
  }

  openModal() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false});
  }

  onClickHighlight(tag_title) {
    this.props.setActiveTag(tag_title);
    this.props.filterHighlights(tag_title);
  }

  renderTags() {
    return this.props.tags.map((tag, key) => {
      let klass = (tag.title === this.props.activeTag) ? "tag-item active-tag-item" : "tag-item";
      return (
        <div className={klass}
          onClick={() => {this.onClickHighlight(tag.title)}}
          key={key}>
          <NavItem>
            {tag.title}
          </NavItem>
        </div>
      );
    })
  }

  onInputChange(event) {
    this.setState({ newTagTitle: event.target.value });
  }

  onNewTagSubmit() {
    if (this.state.newTagTitle) {
      this.props.createTag(this.state.newTagTitle);
      this.closeModal();
    }
  }

  render() {
    return (
      <div className="side-menu-container col-xs-3 col-sm-3 col-md-3 col-lg-3 side-menu ">
        <div className="side-menu-header">
          <Button
            className="pull-right"
            bsStyle="default"
            bsSize="small"
            onClick={this.openModal}
            ><i className="fa fa-plus-square-o"></i></Button>
          <h3 className="tags-header-title">Tags</h3>
        </div>

        <Nav bsStyle="pills" stacked>
          {this.renderTags()}
        </Nav>

        <Modal
          show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>New Tag Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <FormControl
                type="text"
                value={this.state.newTagTitle}
                onChange={this.onInputChange}>
              </FormControl>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onNewTagSubmit}>Create</Button>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tags: state.tags.all,
    activeTag: state.tags.active
  }
}

export default connect(mapStateToProps, { createTag, setActiveTag, filterHighlights })(TagsIndex);
