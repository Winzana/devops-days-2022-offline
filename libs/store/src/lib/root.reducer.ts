import { errorReducer } from './generic.error.reducer';
import { ReduxDispatch } from './store.entity';

import { combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

/**
 * Dispatch
 */
export function useReduxDispatch(): ReduxDispatch {
  return useDispatch<ReduxDispatch>();
}

export const appReducer = combineReducers({
  errors: errorReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === 'auth/fetchLogout') {
    state = undefined;
  }
  return appReducer(state, action);
};
