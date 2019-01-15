import React from 'react';
import { connect } from 'react-redux';
import TagList from '../components/TagList';

const TagListContainer = ({ tags }) => (
  <TagList tags={tags} />
);

const mapStateToProps = state => ({
  tags: state.tags.items
});

export default connect(mapStateToProps)(TagListContainer);
