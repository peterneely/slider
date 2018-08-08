import * as types from './types';

export const loading = isLoading => ({
  payload: isLoading,
  type: types.LOADING,
});
