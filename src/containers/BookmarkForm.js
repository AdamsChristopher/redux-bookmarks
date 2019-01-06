import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBookmark, updateBookmark } from '../actions';

class BookmarkForm extends Component {
  constructor(props) {
    super(props);
    const { bookmark } = props;
    this.state = bookmark ? bookmark : {
      url: '',
      label: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addBookmark, updateBookmark, bookmark } = this.props;
    const { url, label } = this.state;
    if(!bookmark) {
      addBookmark(url, label);
    } 
    else {
      updateBookmark(bookmark.id, url, label);
    }
    this.setState({ url: '', label: '' })
  }

  render() {
    const { url, label } = this.state;
    const { bookmark } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="url"
          value={url}
          placeholder="Bookmark link"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="label"
          value={label}
          placeholder="Bookmark label"
          onChange={this.handleChange}
        />
        <button
          type="submit"
        >
          {bookmark ? 'Update' : 'Add'} bookmark
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBookmark: (url, label) => dispatch(addBookmark(url, label)),
  updateBookmark: (id, url, label) => dispatch(updateBookmark(id, url, label))
});

export default connect(null, mapDispatchToProps)(BookmarkForm);
