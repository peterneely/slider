import initialState from './initialState';
import * as types from './types';

export default function reduce(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case types.LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
}
