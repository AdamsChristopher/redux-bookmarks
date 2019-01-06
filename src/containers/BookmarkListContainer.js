import React from 'react';
import { connect } from 'react-redux';
import BookmarkList from '../components/BookmarkList';

const BookmarkListContainer = ({ bookmarks }) => (
  <BookmarkList bookmarks={bookmarks} />
);

const mapStateToProps = state => ({
  bookmarks: state.bookmarks
});

export default connect(mapStateToProps)(BookmarkListContainer);
