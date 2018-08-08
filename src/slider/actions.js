import * as repo from './repo';
import * as types from './types';
import { loading } from '../layout/actions';

export const getInitialImages = () => {
  return dispatch => {
    dispatch(loading(true));
    dispatch(getImages())
      .then(() => dispatch(loading(false)))
      .catch(() => dispatch(loading(false)));
  };
};

export const getImages = () => {
  return dispatch =>
    repo
      .getImages()
      .then(images => {
        dispatch({ payload: images, type: types.SET_IMAGES });
      })
      .catch(error => {
        console.log(error);
      });
};
