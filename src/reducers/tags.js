import {
  ADD_TAG,
  DELETE_TAG,
  UPDATE_TAG
} from '../actions';

const initialState = {
  items: [],
  nextId: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAG: {
      const { items, nextId } = state;
      const { label, color } = action;
      const tag = { id: nextId, label, color };
      return {
        items: [...items, tag],
        nextId: nextId + 1
      };
    }
    case DELETE_TAG: {
      const tags = state.items.filter(
        tag => tag.id !== action.id
      );
      return {
        items: tags,
        nextId: state.nextId
      };
    }
    case UPDATE_TAG: {
      const { id, label, color } = action;
      const tags = state.items.map(
        tag => tag.id !== id
          ? tag
          : { ...tag, label, color }
      );
      return {
        items: tags,
        nextId: state.nextId
      };
    }
    default:
      return state;
  }
}

export default reducer;
