import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Navigator } from '@navigators';
import { ProviderStore } from '@store';

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
    <ProviderStore>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Navigator />
          </View>
        </SafeAreaView>
      </PaperProvider>
    </ProviderStore>
  );
};

export default App;
