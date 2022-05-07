import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

import { IState as ErrorState } from './generic.error.reducer';

export interface IAppState {
  errors: ErrorState;
}

export type AppThunk<T = any> = ThunkAction<T, IAppState, null, Action<string>>;

export type ReduxDispatch = ThunkDispatch<IAppState, any, Action>;
