import {
  ADD_BOOKMARK
} from '../actions';

const initialState = {
  bookmarks: [],
  nextId: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      const { bookmarks, nextId } = state;
      const { url, label } = action;
      const bookmark = { id: nextId, url, label };
      return {
        bookmarks: [...bookmarks, bookmark],
        nextId: nextId + 1
      };
    default:
      return state;
  }
}

export default reducer;