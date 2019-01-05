export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';

export const addBookmark = (url, label) => ({
  type: ADD_BOOKMARK, url, label
});

export const deleteBookmark = id => ({
  type: DELETE_BOOKMARK, id
});