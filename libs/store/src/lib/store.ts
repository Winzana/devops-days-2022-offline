import './api';
import rootReducer from './root.reducer';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  diff: true,
});

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware,
});
