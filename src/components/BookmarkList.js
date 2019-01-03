import React from 'react';
import Bookmark from './Bookmark';

const BookmarkList = ({ bookmarks }) => (
  <ul>
    {
      bookmarks.map(bookmark => (
        <Bookmark key={bookmark.id} {...bookmark} />
      ))
    }
  </ul>
);

export default BookmarkList;