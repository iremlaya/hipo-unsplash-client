
import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  INCREMENT_PAGE,
  SET_PAGE_ZERO,
  DECREMENT_PAGE,
} from '../actionTypes';


const initialState = {
  loading: false,
  data: [],
  error: '',
  page: 0,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case DECREMENT_PAGE:
      return {
        ...state,
        page: state.page - 1,
      };
    case SET_PAGE_ZERO:
      return {
        ...state,
        page: 0,
      };
    default: return state;
  }
};

export default fetchReducer;
