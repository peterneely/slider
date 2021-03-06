import initialState from './initialState';
import * as types from './types';

export default function reduce(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case types.SET_IMAGES:
      return {
        ...state,
        images: [...(state.images || []), ...(payload || [])],
      };
    default:
      return state;
  }
}
