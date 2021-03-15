import './api';
import { rootReducer } from './root.reducer';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  diff: true,
});

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [...getDefaultMiddleware(), logger]
    : getDefaultMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});
