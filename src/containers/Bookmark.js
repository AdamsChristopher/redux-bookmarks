import React from 'react';
import { connect } from 'react-redux';
import { deleteBookmark } from '../actions';

const Bookmark = ({ id, url, label, deleteBookmark }) => (
  <li>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
    <button onClick={() => deleteBookmark(id)}>
      x
    </button>
  </li>
);

const mapDispatchToProps = dispatch => ({
  deleteBookmark: id => dispatch(deleteBookmark(id))
});

export default connect(null, mapDispatchToProps)(Bookmark);
