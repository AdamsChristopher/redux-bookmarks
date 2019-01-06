import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBookmark } from '../actions';
import { map } from 'rsvp';

class BookmarkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { addBookmark } = this.props;
    const { url, label } = this.state;
    addBookmark(url, label);
    this.setState({ url: '', label: '' })
  }

  render() {
    const { url, label } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="url"
          value={url}
          placeholder="Bookmark link"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="label"
          value={label}
          placeholder="Bookmark label"
          onChange={this.handleChange}
        />
        <br />
        <button
          type="submit"
        >
          Add bookmark
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBookmark: (url, label) => dispatch(addBookmark(url, label))
});

export default connect(null, mapDispatchToProps)(BookmarkForm);