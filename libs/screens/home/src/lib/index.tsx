import React from 'react';
import { Title } from 'react-native-paper';
import { Layout } from '@components/layout';
import ListContent from './components/List';
import { Image, StyleSheet, View } from 'react-native';
import { useContent } from '@store';

/* eslint-disable-next-line */
export interface HomeProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'column',
    padding: 15,
    paddingTop: 50,
  },
  tinyLogo: {
    width: 100,
    height: 60,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 15,
  },
  flexBox: {
    flex: 2,
  },
  flexBoxLogo: {
    flex: 1,
  },
});

export function Home(props: HomeProps) {
  const { contents } = useContent();
  return (
    <>
      <Layout>
        <View style={styles.container}>
          <View style={styles.flexContainer}>
            <View style={styles.flexBoxLogo}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri:
                    'https://d33wubrfki0l68.cloudfront.net/fba174b19270a1db8de8910558e38b4fdabc4dcc/5515d/img/devopsdays-brain.png',
                }}
              />
            </View>
            <View style={styles.flexBox}>
              <Title>DevOps Day 2022</Title>
            </View>
          </View>
          <ListContent />
        </View>
      </Layout>
    </>
  );
}
