/* eslint-disable-next-line */
import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';

export interface ProviderStoreProps {
  children: any;
}

export const ProviderStore = ({ children }: ProviderStoreProps) => {
  return <Provider store={store}>{children}</Provider>;
};
