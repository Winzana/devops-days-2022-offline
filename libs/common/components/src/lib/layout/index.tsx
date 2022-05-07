import React, { ReactComponentElement, ReactElement } from 'react';
import { ScrollView } from 'react-native';

/* eslint-disable-next-line */
export interface ComponentsLayoutProps {
  children: any;
}

export const Layout = ({ children }: ComponentsLayoutProps) => {
  return <ScrollView style={{ flex: 1 }}>{children}</ScrollView>;
};
