import { Action, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { contentSlice, ContentState } from './content';
import { offlineSlice, OfflineState } from './offline';
import { errorReducer, ErrorState } from './generic.error.reducer';

export interface IAppState extends ErrorState, ContentState, OfflineState {}

export type ReduxDispatch<TArgs = any> = ThunkDispatch<
  IAppState,
  TArgs,
  Action
>;

export function useReduxDispatch<T>(): ReduxDispatch<T> {
  return useDispatch<ReduxDispatch<T>>();
}

const rootReducer = combineReducers<IAppState>({
  content: contentSlice,
  offline: offlineSlice,
  errors: errorReducer,
});

export default rootReducer;
