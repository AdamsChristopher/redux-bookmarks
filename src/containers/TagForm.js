import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTag, updateTag } from '../actions';

class TagForm extends Component {
  constructor(props) {
    super(props);
    const { tag } = props;
    this.state = tag ? tag : {
      label: '',
      color: ''
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
    const { addTag, updateTag, tag } = this.props;
    const { label, color } = this.state;
    if (!tag) {
      addTag(label, color);
    }
    else {
      updateTag(tag.id, label, color);
    }
    this.setState({ color: '', label: '' })
  }

  render() {
    const { label, color } = this.state;
    const { tag } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="label"
          value={label}
          placeholder="Tag label"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="color"
          value={color}
          placeholder="Tag color"
          onChange={this.handleChange}
        />
        <br />
        <button
          type="submit"
        >
          {tag ? 'Update' : 'Add'} tag
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addTag,
  updateTag
}

export default connect(null, mapDispatchToProps)(TagForm);
