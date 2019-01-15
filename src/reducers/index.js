import { combineReducers } from 'redux';
import bookmarks from './bookmarks';
import tags from './tags';

const reducer = combineReducers({
  bookmarks,
  tags
});

export default reducer;