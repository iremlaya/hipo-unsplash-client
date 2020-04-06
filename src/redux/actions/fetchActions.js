import service from '../../services/api/unsplash';

import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
} from '../actionTypes';


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


export const fetchPhotosByCollections = (input, collectionIds) => (dispatch) => {
  dispatch(fetchPhotosRequest());
  service.searchPhotosByCollections(input, collectionIds)
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


export const fetchPhotos = (input) => (dispatch) => {
  dispatch(fetchPhotosRequest());
  service.searchPhotos(input)
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
