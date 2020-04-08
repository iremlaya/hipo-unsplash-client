import service from '../../services/api/unsplash';
import cacheFetch from '../selectors/cacheSelector';

import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  INCREMENT_PAGE,
  SET_PAGE_ZERO,
  DECREMENT_PAGE,
} from '../actionTypes';


export const incrementPage = () => ({
  type: INCREMENT_PAGE,
});

export const decrementPage = () => ({
  type: DECREMENT_PAGE,
});

export const setPageZero = () => ({
  type: SET_PAGE_ZERO,
});


export const fetchPhotosRequest = () => ({
  type: FETCH_PHOTOS_REQUEST,
});

export const fetchPhotosSuccess = (photos) => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: photos,
});

export const fetchPhotosFailure = (error) => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: error,
});

export const fetchPhotosByCollections = (input, collectionIds, page) => (dispatch) => {
  dispatch(fetchPhotosRequest());
  // cacheFetch(input, collectionIds, page)
  service.searchPhotosByCollections(input, collectionIds, page).then((response) => {
    // response.data is the Photos

    const photos = response.data;

    dispatch(fetchPhotosSuccess(photos));
  })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchPhotosFailure(error.message));
    });
};


export const fetchPhotos = (input, page) => (dispatch) => {
  dispatch(fetchPhotosRequest());
  service.searchPhotos(input, page)
    .then((response) => {
      // response.data is the Photos
      const photos = response.data;
      dispatch(fetchPhotosSuccess(photos));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchPhotosFailure(error.message));
    });
};
