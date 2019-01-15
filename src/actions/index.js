export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';
export const UPDATE_BOOKMARK = 'UPDATE_BOOKMARK';
export const ADD_TAG = 'ADD_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const UPDATE_TAG = 'UPDATE_TAG';

export const addBookmark = (url, label) => ({
  type: ADD_BOOKMARK,
  url,
  label
});

export const deleteBookmark = id => ({
  type: DELETE_BOOKMARK,
  id
});

export const updateBookmark = (id, url, label) => ({
  type: UPDATE_BOOKMARK,
  id,
  url,
  label
});

export const addTag = (label, color) => ({
  type: ADD_TAG,
  label,
  color
});

export const deleteTag = id => ({
  type: DELETE_TAG,
  id
});

export const updateTag = (id, label, color) => ({
  type: UPDATE_TAG,
  id,
  label,
  color
});
