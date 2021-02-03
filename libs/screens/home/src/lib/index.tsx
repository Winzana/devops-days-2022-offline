import React from 'react';
import { Text } from 'react-native';
import { Layout } from '@pam/components/layout';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <Layout>
      <Text>Home Screen</Text>
    </Layout>
  );
}
