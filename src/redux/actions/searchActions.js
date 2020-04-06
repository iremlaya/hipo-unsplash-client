/* eslint-disable import/prefer-default-export */

import {
  CHANGE_INPUT,
  CHANGE_COLLECTIONS,
} from '../actionTypes';

export const changeInput = (input = 'hi') => ({
  type: CHANGE_INPUT,
  payload: input,
});


export const changeCollections = (id = '0') => ({
  type: CHANGE_COLLECTIONS,
  payload: id,
});
