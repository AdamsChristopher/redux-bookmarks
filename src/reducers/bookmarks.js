import {
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  UPDATE_BOOKMARK
} from '../actions';

const initialState = {
  items: [],
  nextId: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK: {
      const { items, nextId } = state;
      const { url, label } = action;
      const bookmark = { id: nextId, url, label };
      return {
        items: [...items, bookmark],
        nextId: nextId + 1
      };
    }
    case DELETE_BOOKMARK: {
      const bookmarks = state.items.filter(
        bookmark => bookmark.id !== action.id
      );
      return {
        items: bookmarks,
        nextId: state.nextId
      };
    }
    case UPDATE_BOOKMARK: {
      const { id, url, label } = action;
      const bookmarks = state.items.map(
        bookmark => bookmark.id !== id
          ? bookmark
          : { ...bookmark, url, label }
      );
      return {
        items: bookmarks,
        nextId: state.nextId
      };
    }
    default:
      return state;
  }
}

export default reducer;
