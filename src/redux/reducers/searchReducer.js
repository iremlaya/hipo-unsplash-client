import {
  CHANGE_INPUT,
  CHANGE_COLLECTIONS,
} from '../actionTypes';

const initialState = {
  input: '',
  id: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT: return {
      ...state,
      input: action.payload,
    };
    case CHANGE_COLLECTIONS: return {
      ...state,
      id: action.payload,
    };

    default: return state;
  }
};

export default searchReducer;
