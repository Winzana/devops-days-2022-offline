import React from 'react';
import { Navigator } from '@pam/navigators';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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
    <>
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
    </>
  );
};

export default App;
