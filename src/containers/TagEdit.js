import React from 'react';
import { connect } from 'react-redux';
import TagForm from './TagForm';

const TagEdit = ({ match, tags }) => {
  const id = Number(match.params.id);
  const tag = tags.find(tag => tag.id === id);
  return <TagForm tag={tag} />
}

const mapStateToProps = state => ({
  tags: state.tags.items
});

export default connect(mapStateToProps)(TagEdit);
