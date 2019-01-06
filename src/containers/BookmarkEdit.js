import React from 'react';
import { connect } from 'react-redux';
import BookmarkForm from './BookmarkForm';

const BookmarkEdit = ({ match, bookmarks }) => {
  const id = Number(match.params.id);
  const bookmark = bookmarks.find(bookmark => bookmark.id === id);
  return <BookmarkForm bookmark={bookmark} />
}

const mapStateToProps = state => ({
  bookmarks: state.bookmarks
});

export default connect(mapStateToProps)(BookmarkEdit);
