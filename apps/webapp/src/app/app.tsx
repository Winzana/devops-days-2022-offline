import React from 'react';
import { Navigator } from '@navigators';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ProviderStore } from '@store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export const App = () => {
  return (
    <ProviderStore>
      <PaperProvider theme={theme}>
        <React.Fragment>
          <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
          <Navigator />
        </React.Fragment>
      </PaperProvider>
    </ProviderStore>
  );
};

export default App;
