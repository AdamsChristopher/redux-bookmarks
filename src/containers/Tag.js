import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTag } from '../actions';

const Tag = ({ id, label, color, deleteTag }) => (
  <li>
    <span
      style={{ padding: '2px', background: color }}
    >
      {label}
    </span>
    <Link to={`/edit-tag/${id}`}>
      <button>
        Edit
      </button>
    </Link>
    <button onClick={() => deleteTag(id)}>
      x
    </button>
  </li>
);

const mapDispatchToProps = dispatch => ({
  deleteTag: id => dispatch(deleteTag(id))
});

export default connect(null, mapDispatchToProps)(Tag);
