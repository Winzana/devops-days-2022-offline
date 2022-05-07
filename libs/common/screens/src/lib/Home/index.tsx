import React from 'react';
import { Button, Text } from 'react-native-paper';
import { Layout } from '@components';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <>
      <Layout>
        <Text>Home Screen</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}
        >
          Press me
        </Button>
      </Layout>
    </>
  );
}
