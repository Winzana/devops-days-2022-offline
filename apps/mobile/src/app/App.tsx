import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  Text,
} from 'react-native-paper';
import { Layout } from '@pam/components/layout';
import { Navigator } from '@pam/navigators';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Navigator />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
