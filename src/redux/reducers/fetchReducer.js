
import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  INCREMENT_PAGE,
} from '../actionTypes';


const initialState = {
  loading: false,
  data: [],
  error: '',
  clickedPhoto: '',
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
    default: return state;
  }
};

export default fetchReducer;
