export const ADD_BOOKMARK = 'ADD_BOOKMARK';

export const addBookmark = (url, label) => ({
  type: ADD_BOOKMARK, url, label
});