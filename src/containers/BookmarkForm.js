import React, { Component } from 'react';

class BookmarkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      label: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log(this.state);
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
          Add bookmark
        </button>
      </form>
    );
  }
}

export default BookmarkForm;