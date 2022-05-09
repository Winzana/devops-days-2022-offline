import React, { ReactComponentElement, ReactElement, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import BottomNavigation from './BottomNavigation/index.web';
import { Banner } from 'react-native-paper';
import { useOffline } from '@store';

/* eslint-disable-next-line */
export interface ComponentsLayoutProps {
  children: any;
}

export const Layout = ({ children }: ComponentsLayoutProps) => {
  const { isOffline } = useOffline();
  return (
    <>
      <Banner visible={isOffline} actions={[]} icon="wifi-off">
        You are offline.
      </Banner>
      <ScrollView
        style={{ flex: 1, backgroundColor: '#FAFAFA', paddingBottom: 40 }}
      >
        {children}
      </ScrollView>
      <BottomNavigation />
    </>
  );
};
